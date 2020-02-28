import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatSelectModule,
  MatSidenavModule,
  MatCardModule,
  MatTableModule
} from "@angular/material";

const modules: any[] = [CommonModule,
  MatCardModule,
  MatListModule,
  MatButtonModule,
  MatGridListModule,
  MatTableModule];

@NgModule({
  imports: modules,
  exports: modules,
  declarations: []
})
export class MaterialMyModule {
}
