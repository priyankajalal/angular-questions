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

const routes: Routes = [
  {path:"products",component:ProductListComponent},
  {path:"products/:id",component:ProductComponent},
  {path:"register",component:RegisterComponent},
  {path:"users",component:UsersComponent},
  {path:"accessories",component:AccessoriesComponent},
  {path:"accessories/:id",component:AccessoryDetailComponent},
  {path:"portfolio",component:PortfolioComponent}

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
    PortfolioComponent
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
