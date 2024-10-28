import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataManagementComponent } from './data-management/data-management.component';

const routes: Routes = [
  { path: '', redirectTo: 'data-management', pathMatch: 'full' }, 
  { path: 'data-management', component: DataManagementComponent }, 
  { path: '**', redirectTo: 'data-management' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
