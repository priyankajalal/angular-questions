import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatTabsModule,
  MatTableModule,
  MatCheckboxModule,
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatTableModule,MatCheckboxModule,MatPaginatorModule
  ],
  exports: [
    MatTabsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatTableModule,MatCheckboxModule,MatPaginatorModule
  ],
  declarations: []
})
export class MaterialModule {
}
