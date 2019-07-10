import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  findById(id: number) {
    const url = `${environment.employeeServiceBaseUrl}/employee/${id}`;
    console.log(url);
    return this.http.get<Employee>(url);
  }
}
