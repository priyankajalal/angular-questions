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
import { UsersComponent } from './users/users.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AccessoryDetailComponent } from './accessory-detail/accessory-detail.component';
import { ChartComponent } from './chart/chart.component';
import { NewsComponent } from './news/news.component';
import { PositionsComponent } from './positions/positions.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './subject/home/home.component';
import { Comp1Component } from './subject/comp1/comp1.component';
import { Comp2Component } from './subject/comp2/comp2.component';
import { UtilityService } from './subject/utility.service';
import { UppercaseDirective } from './directive/uppercase.directive';
import { CustomUppercasePipe } from './pipe/custom-uppercase.pipe';

const routes: Routes = [
  {path:"products",component:ProductListComponent},
  {path:"products/:id",component:ProductComponent},
  {path:"register",component:RegisterComponent},
  {path:"users",component:UsersComponent},
  {path:"accessories",component:AccessoriesComponent},
  {path:"accessories/:id",component:AccessoryDetailComponent},
  {path:"portfolio",component:PortfolioComponent},
  {path:"home",component:HomeComponent}


];


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    RegisterComponent,
    UsersComponent,
    AccessoriesComponent,
    AccessoryDetailComponent,
    ChartComponent,
    NewsComponent,
    PositionsComponent,
    PortfolioComponent,
    HomeComponent,
    Comp1Component,
    Comp2Component,
    UppercaseDirective,
    CustomUppercasePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService,RegisterService,CommonService,UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
