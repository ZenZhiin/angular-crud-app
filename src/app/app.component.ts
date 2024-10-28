import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';

import { DataManagementComponent } from './data-management/data-management.component';

@NgModule({
  declarations: [
    DataManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [DataManagementComponent]
})
export class AppModule {
  title = 'angular-crud-app';
}