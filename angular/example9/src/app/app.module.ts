import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';
import { HttpClientModule } from '@angular/common/http';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';

@NgModule({
  declarations: [AppComponent, EmployeeListComponent, EmployeeViewComponent, PathNotFoundComponent, EmployeeEditComponent, EmployeeCreateComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
