import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import {Routes, RouterModule} from '@angular/router';
import { Comp4Component } from './comp4/comp4.component';


const routes: Routes = [
    { path: '', component: Component1Component },
    { path: 'component2', component: Component2Component },
    { path: 'component3', component: Component3Component },
    { path: 'component4', component: Comp4Component },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Component1Component, Component2Component, Component3Component, Comp4Component]
})
export class CustomersModule { }
