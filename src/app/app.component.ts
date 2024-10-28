import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import { DataManagementComponent } from './data-management/data-management.component';

@NgModule({
  declarations: [
    DataManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [DataManagementComponent]
})
export class AppModule {
  title = 'angular-crud-app';
}