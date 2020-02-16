import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {SharedModule} from './shared/shared.module';
import { ShadowDirective } from './directives/shadow.directive';
import { EmployeeService } from './services/employee-service.service';
import { AddChildDirective } from './structuralCustomDirective/add-child.directive';
import { TestDirectiveComponent } from './test-directive/test-directive.component';
import { HoverDirective } from './attributeCustomDirective/hover.directive';
import { ParentComponent } from './ViewChildExamples/parent/parent.component';
import { ChildComponent } from './ViewChildExamples/child/child.component';
import { ChangeColorDirective } from './ViewChildExamples/change-color.directive';
import { UnlessDirective } from './structuralCustomDirective/unless.directive';
import { CreateEmpolyeeComponent } from './ReactiveForms/create-empolyee/create-empolyee.component';
import { UsingFormBuilderComponent } from './ReactiveForms/using-form-builder/using-form-builder.component';
import { CreditCardLogoDirective } from './attributeCustomDirective/credit-card-logo.directive';
import { ReverseString } from './pipes/reverse-string.pipe.ts';
import { ParamiterizedPipe } from './pipes/pipe-with-param.pipe.ts';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    HomeComponent,
    ShadowDirective,
    AddChildDirective,
    TestDirectiveComponent,
    HoverDirective,
    ParentComponent,
    ChildComponent,
    ChangeColorDirective,
    UnlessDirective,
    CreateEmpolyeeComponent,
    UsingFormBuilderComponent,
    CreditCardLogoDirective,
    ReverseString,
    ParamiterizedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
