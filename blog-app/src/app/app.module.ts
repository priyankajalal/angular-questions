import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {EmpService} from '../services/empService';
import {StockService} from "../services/stockService";
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Route, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {StockComponent} from './stock/stock.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {JokeComponentComponent} from './joke-component/joke-component.component';
import {JokeListComponentComponent} from './joke-list-component/joke-list-component.component';
import {TestAppComponent} from './test-app/test-app.component';
import {Test2Component} from './test2/test2.component';
import {Test3Component} from './test3/test3.component';
import {ViewChildDemoComponent} from './view-child-demo/view-child-demo.component';
import {ChildViewComponent} from './child-view/child-view.component';
import {SharedAppComponent} from './shared-app/shared-app.component';
import {SharedService} from "./shared/shared.service";
import {SharedAppListComponent} from './shared-app-list/shared-app-list.component';
import {HomeComponent} from './shared-demo/home/home.component';
import {PortfolioComponent} from './shared-demo/portfolio/portfolio.component';
import {ChartComponent} from './shared-demo/chart/chart.component';
import {PortfolioService} from "./shared-demo/service/portfolioService";
import { NewsComponent } from './shared-demo/news/news.component';
import {MaterialMyModule} from "./modules/material-my.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export const routes: Routes = [
  {path: 'stock', component: StockComponent},
  {path: 'jokes', component: JokeListComponentComponent},
  {path: 'test', component: TestAppComponent},
  {path: 'test2', component: Test2Component},
  {path: 'test3/:id', component: Test3Component},
  {path: 'view-child', component: ViewChildDemoComponent},
  {path: 'shared', component: HomeComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    HeaderComponent,
    FooterComponent,
    JokeComponentComponent,
    JokeListComponentComponent,
    TestAppComponent,
    Test2Component,
    Test3Component,
    ViewChildDemoComponent,
    ChildViewComponent,
    SharedAppComponent,
    SharedAppListComponent,
    HomeComponent,
    PortfolioComponent,
    ChartComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialMyModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmpService, StockService, SharedService, PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
