import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataManagementComponent } from './data-management/data-management.component';

export const routes: Routes = [
  { path: '', redirectTo: 'data-management', pathMatch: 'full' }, // Default route
  { path: 'data-management', component: DataManagementComponent }, // Data Management page
  { path: '**', redirectTo: 'data-management' } // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}