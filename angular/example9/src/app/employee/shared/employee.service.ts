import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Employee } from './employee';
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError('An error has occurred');
  }

  private get<T>(url): Observable<T> {
    console.log('get:', url);
    return this.http.get<T>(url).pipe(
      // retry(5),
      catchError(this.handleError)
    );
  }

  private post<T>(url, data: T): Observable<T> {
    console.log('post:', url);
    return this.http
      .post<T>(url, data, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }
  private put<T>(url, data: T): Observable<T> {
    console.log('put:', url);
    return this.http.put<T>(url, data).pipe(
      // retry(5),
      catchError(this.handleError)
    );
  }

  findById(
    id: number // : Observable<Employee>
  ) {
    const url = `${environment.employeeServiceBaseUrl}/employee/${id}`;
    return this.get<Employee>(url);
  }

  findAll() {
    const url = `${environment.employeeServiceBaseUrl}/employees`;
    return this.get<Employee[]>(url);
  }

  save(employee: Employee) {
    const url = `${environment.employeeServiceBaseUrl}/update/${employee.id}`;
    return this.put(url, employee);
  }
  create(employee: Employee) {
    const url = `${environment.employeeServiceBaseUrl}/create`;
    return this.post(url, {
      employee_name: employee.employee_name,
      employee_age: employee.employee_age,
      employee_salary: employee.employee_salary
    });
  }
}
