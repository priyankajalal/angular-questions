import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSalaryPipe } from './../pipes/customSalary.pipe';



@NgModule({
  declarations: [CustomSalaryPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CustomSalaryPipe
  ]
})

export class SharedModule { }
