import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee';
import { EmployeeService } from '../shared/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employee: Employee = null;
  errorMessage = '';
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    // https://blog.angularindepth.com/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0
    // this.employeeService.findById(this.searchId).subscribe(
    //   result => {
    //     // Clones the object result and assigns it to this.employee
    //     // It is better to clone than to directly assign, since result is not immutable
    //     this.employee = { ...result };
    //     console.log(this.employee);
    //   },
    //   error => {
    //     console.log(error);
    //     this.errorMessage = 'Connection error';
    //   }
    // );
  }
}
