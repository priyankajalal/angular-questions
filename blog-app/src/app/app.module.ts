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
import { NewsComponent } from './news/news.component';
import { TestAppComponent } from './test-app/test-app.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';

export const routes: Routes = [
  {path: 'stock', component: StockComponent},
  {path: 'jokes', component: JokeListComponentComponent},
  {path: 'test', component: TestAppComponent},
  {path: 'test2', component: Test2Component},
  {path: 'test3/:id', component: Test3Component}
];

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    HeaderComponent,
    FooterComponent,
    JokeComponentComponent,
    JokeListComponentComponent,
    NewsComponent,
    TestAppComponent,
    Test2Component,
    Test3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmpService, StockService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
