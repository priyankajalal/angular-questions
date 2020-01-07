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

export const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent,canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  { path: 'customers',loadChildren: './customers/customers.module#CustomersModule' },
  { path: 'orders',loadChildren: './orders/orders.module#OrdersModule' }
  ];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    PipeParametrizedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
