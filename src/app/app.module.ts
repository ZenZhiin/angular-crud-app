import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; 
import { DataManagementComponent } from './data-management/data-management.component';

@NgModule({
  declarations: [
    AppComponent,
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
export class AppModule {}
