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
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}

  search() {
    this.employeeService.findById(this.searchId).subscribe(result => {
      // Clones the object result and assigns it to this.employee
      // It is better to clone than to directly assign, since result is not immutable
      this.employee = { ...result };
      console.log(this.employee);
    });
  }
}
