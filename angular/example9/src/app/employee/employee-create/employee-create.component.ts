import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Employee } from '../shared/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  @ViewChild('editForm', { static: true })
  editForm;

  submitted = false;

  employee: Employee = new Employee(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  );

  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {}

  save() {
    this.submitted = true;
    console.log(this.employee);
    this.employeeService.create(this.employee).subscribe(
      result => {
        console.log(result);
        this.router.navigate([`/employee/list`]);
      },
      error => {
        console.error(error);
        this.errorMessage = error.toString();
        this.submitted = false;
      }
    );
  }

  cancel() {
    this.router.navigate([`/employee/list`]);
  }

  get canSubmit() {
    return this.editForm.form.valid && !this.submitted;
  }
}
