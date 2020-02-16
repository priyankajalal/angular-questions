import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee1Component } from './employee1/employee1.component';
import { Employee2Component } from './employee2/employee2.component';
import { Routes, RouterModule } from '@angular/router';
import {SharedModule} from './../shared/shared.module';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
    {path: 'employee1', component: Employee1Component},
    {path: 'employee2', component: Employee2Component},
];

@NgModule({
  declarations: [Employee1Component, Employee2Component],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)

  ]
})
export class EmployeesModule { }
