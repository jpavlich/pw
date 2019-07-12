import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/employee/list' },
  { path: 'employee/list', component: EmployeeListComponent },
  { path: 'employee/view/:id', component: EmployeeViewComponent },
  { path: 'employee/edit/:id', component: EmployeeEditComponent },
  { path: 'employee/create', component: EmployeeCreateComponent },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
