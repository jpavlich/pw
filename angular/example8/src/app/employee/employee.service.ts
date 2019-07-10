import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Employee } from './employee';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    return throwError('An error has occurred');
  }

  findById(id: number) {
    const url = `${environment.employeeServiceBaseUrl}/employee/${id}`;
    console.log(url);
    return this.http.get<Employee>(url).pipe(
      retry(5), // Retries 5 times until successful
      catchError(this.handleError) // Uses this.handleError() to process any error in the request
    );
  }
}
