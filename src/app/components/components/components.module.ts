import { SpinnerComponent } from './../spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [
    NavbarComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[NavbarComponent,SpinnerComponent]
})
export class ComponentsModule { }
