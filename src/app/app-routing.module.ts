import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: ItemListComponent },           
  { path: 'create', component: ItemFormComponent },       
  { path: 'edit/:id', component: ItemFormComponent },     
  { path: 'view/:id', component: ItemViewComponent },    
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' },                         
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
