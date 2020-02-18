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
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';

export const routes: Routes = [
  {path: 'stock', component: StockComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    HeaderComponent,
    FooterComponent
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
