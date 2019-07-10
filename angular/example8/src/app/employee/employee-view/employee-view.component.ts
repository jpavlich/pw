import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employee: Employee = null;
  searchId: number = null;
  errorMessage = '';
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}

  search() {
    // https://netbasal.com/when-to-unsubscribe-in-angular-d61c6b21bad3
    this.employeeService.findById(this.searchId).subscribe(
      result => {
        this.employee = result;
        console.log(this.employee);
      },
      error => {
        console.log(error);
        this.errorMessage = 'Connection error';
      }
    );
  }
}
