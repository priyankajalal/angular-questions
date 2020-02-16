import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TestDirectiveComponent } from './test-directive/test-directive.component';
import { ParentComponent } from './ViewChildExamples/parent/parent.component';
import { ChildComponent } from './ViewChildExamples/child/child.component';
import { CreateEmpolyeeComponent } from './ReactiveForms/create-empolyee/create-empolyee.component';
import { UsingFormBuilderComponent } from './ReactiveForms/using-form-builder/using-form-builder.component';

const routes: Routes = [
    {path: 'child', component: ChildComponent},
    {path: 'parent', component: ParentComponent},
    {path: '', component: HomeComponent},
    {path: 'test-directive', component: TestDirectiveComponent},
    {path: 'employees',loadChildren: './employees/employees.module#EmployeesModule' },
    {path: 'reactive-form',component: CreateEmpolyeeComponent },
    {path: 'reactive-using-fb',component: UsingFormBuilderComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
