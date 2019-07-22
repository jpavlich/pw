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
  private delete<T>(url: string): Observable<T> {
    console.log('delete:', url);
    return this.http.delete<T>(url).pipe(
      // retry(5),
      catchError(this.handleError)
    );
  }

  findById(
    id: number // : Observable<Employee>
  ) {
    const url = `${environment.employeeServiceBaseUrl}/employees/${id}`;
    return this.get<Employee>(url);
  }

  findAll() {
    const url = `${environment.employeeServiceBaseUrl}/employees`;
    return this.get<Employee[]>(url);
  }

  update(employee: Employee) {
    const url = `${environment.employeeServiceBaseUrl}/employees/${
      employee.id
    }`;
    return this.put(url, {
      name: employee.name,
      age: employee.age,
      salary: employee.salary
    });
  }
  create(employee: Employee) {
    const url = `${environment.employeeServiceBaseUrl}/employees`;
    return this.post(url, {
      name: employee.name,
      age: employee.age,
      salary: employee.salary
    });
  }

  deleteEmployee(employee: Employee) {
    const url = `${environment.employeeServiceBaseUrl}/employees/${
      employee.id
    }`;
    return this.delete(url);
  }
}
