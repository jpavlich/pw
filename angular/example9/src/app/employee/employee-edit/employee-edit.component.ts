import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employee: Employee = null;

  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => this.employeeService.findById(+params.get('id')))
      )
      .subscribe(result => {
        this.employee = result;
      });
  }

  save() {
    console.log(this.employee);
    this.employeeService.save(this.employee).subscribe(
      result => {
        console.log(result);
        this.router.navigate([`/employee/view/${this.employee.id}`]);
      },
      error => {
        console.error(error);
        this.errorMessage = error.toString();
      }
    );
  }

  cancel() {
    this.router.navigate([`/employee/view/${this.employee.id}`]);
  }
}
