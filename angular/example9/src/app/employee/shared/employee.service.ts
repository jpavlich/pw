import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ExampleResponse } from "../../shared/example-response";
import { Employee } from "./employee";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError("An error has occurred");
  }

  private get<T>(url): Observable<T> {
    console.log("get:", url);
    return this.http
      .get<T>(url, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          "Accept": "application/json"
        })
      })
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }

  private post<T>(url, data: T): Observable<T> {
    console.log("post:", url);
    return this.http
      .post<T>(url, data, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      })
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }
  private put<T>(url, data: T): Observable<T> {
    console.log("put:", url);
    return this.http.put<T>(url, data).pipe(
      // retry(5),
      catchError(this.handleError)
    );
  }

  findById(
    id: number // : Observable<Employee>
  ) {
    const url = `${environment.employeeServiceBaseUrl}/employee/${id}`;
    return this.get<ExampleResponse<Employee>>(url);
  }

  findAll() {
    const url = `${environment.employeeServiceBaseUrl}/employees`;
    return this.get<ExampleResponse<Employee[]>>(url);
  }

  update(employee: Employee) {
    const url = `${environment.employeeServiceBaseUrl}/update/${employee.id}`;
    return this.put(url, {
      name: employee.employee_name,
      age: employee.employee_age,
      salary: employee.employee_salary
    });
  }
  create(employee: Employee) {
    const url = `${environment.employeeServiceBaseUrl}/create`;
    return this.post(url, {
      name: employee.employee_name,
      age: employee.employee_age,
      salary: employee.employee_salary
    });
  }
}
