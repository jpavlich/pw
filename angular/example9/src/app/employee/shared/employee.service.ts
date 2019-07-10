import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
    return throwError('An error has occurred');
  }

  private get<T>(url): Observable<T> {
    console.log(url);
    return this.http.get<T>(url).pipe(
      retry(5),
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
}
