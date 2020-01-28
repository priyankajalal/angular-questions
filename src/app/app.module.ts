import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Route,Routes} from "@angular/router";
import { AuthGuard } from './_guards/index';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { PipeParametrizedComponent } from './pipe-parametrized/pipe-parametrized.component';
import { CustomSizePipePipe } from './pipes/custom-size-pipe.pipe';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './directive/highlight.directive';
import {FormsModule} from '@angular/forms';
import { NgLoopDirectiveDirective } from './directive/ng-loop-directive.directive';
import { TestDirectivesComponent } from './components/test-directives/test-directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { MyMenuComponent } from './my-menu/my-menu.component';


export const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent,canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  { path: 'customers',loadChildren: './customers/customers.module#CustomersModule' },
  { path: 'orders',loadChildren: './orders/orders.module#OrdersModule' },
  { path: 'test_directive',component: TestDirectivesComponent },
   { path: 'employee',component: EmployeeComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
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
    MyMenuComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
      AuthGuard,
      EmployeeService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
