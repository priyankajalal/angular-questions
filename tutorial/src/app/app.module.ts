import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Route, Routes} from "@angular/router";
import {AuthGuard} from './_guards/index';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CustomersModule} from './customers/customers.module';
import {OrdersModule} from './orders/orders.module';
import {PipeParametrizedComponent} from './pipe-parametrized/pipe-parametrized.component';
import {CustomSizePipePipe} from './pipes/custom-size-pipe.pipe';
import {EmployeeService} from './services/employee.service';
import {HttpClientModule} from '@angular/common/http';
import {HighlightDirective} from './directive/highlight.directive';
import {FormsModule} from '@angular/forms';
import {NgLoopDirectiveDirective} from './directive/ng-loop-directive.directive';
import {TestDirectivesComponent} from './components/test-directives/test-directives.component';
import {EmployeeComponent} from './employee/employee.component';
import {MyMenuComponent} from './my-menu/my-menu.component';
import {SearchComponent} from './employee-crud/search/search.component';
import {RegisterComponent} from './employee-crud/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {CcLogoDirective} from './directive/cc-logo.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {MaterialFormTestComponent} from './material-form-test/material-form-test.component';
import {ReactiveFormPracticeComponent} from './reactive-form-practice/reactive-form-practice.component';
import {SignupService} from './services/signup.service';


export const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'customers', loadChildren: './customers/customers.module#CustomersModule'},
  {path: 'orders', loadChildren: './orders/orders.module#OrdersModule'},
  {path: 'test_directive', component: TestDirectivesComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'search', component: SearchComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'form-practice', component: ReactiveFormPracticeComponent},
  {path: 'material-form', component: MaterialFormTestComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    PipeParametrizedComponent,
    CustomSizePipePipe,
    HighlightDirective,
    NgLoopDirectiveDirective,
    TestDirectivesComponent,
    EmployeeComponent,
    MyMenuComponent,
    SearchComponent,
    RegisterComponent,
    ReactiveFormComponent,
    CcLogoDirective,
    MaterialFormTestComponent,
    ReactiveFormPracticeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard,
    EmployeeService,
    SignupService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
