import { Component, OnInit } from "@angular/core";
import { Employee } from "../shared/employee";
import { EmployeeService } from "../shared/employee.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.findEmployees();
  }

  findEmployees() {
    this.employeeService.findAll().subscribe(
      results => {
        console.log(results);
        this.employees = results;
      },
      error => console.error(error)
    );
  }
}
