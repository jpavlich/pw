import { Component, OnInit } from '@angular/core';
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
  employee: Employee = new Employee(null, '', null, null, null);

  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {}

  create() {
    console.log(this.employee);
    this.employeeService.create(this.employee).subscribe(
      result => {
        console.log(result);
        this.router.navigate([`/employee/list`]);
      },
      error => {
        console.error(error);
        this.errorMessage = error.toString();
      }
    );
  }

  cancel() {
    this.router.navigate([`/employee/list`]);
  }
}
