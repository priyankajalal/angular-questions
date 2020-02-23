import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { RegisterService } from './services/register.service';
import {HttpClientModule} from "@angular/common/http";
import {CommonService} from "./services/common.service";

const routes: Routes = [
  {path:"products",component:ProductListComponent},
  {path:"products/:id",component:ProductComponent},
  {path:"register",component:RegisterComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService,RegisterService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
