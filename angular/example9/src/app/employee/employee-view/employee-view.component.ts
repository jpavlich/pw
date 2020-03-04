import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee';
import { EmployeeService } from '../shared/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => this.employeeService.findById(+params.get('id')))
      )
      .subscribe(result => {
        console.log(result);
        this.employee = result;
      });

    // The following code could be used instead of the above, if and only if the user would never
    // navigate directly from one employee-view to another employee-view screen

    // this.employeeService
    //   .findById(+this.route.snapshot.paramMap.get('id'))
    //   .subscribe(result => {
    //     this.employee = result;
    //   });
  }

  backToList() {
    this.router.navigate(['/employee/list']);
  }
}
