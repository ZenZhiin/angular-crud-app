import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ViewComponent } from './components/view/view.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';

const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' }, 
  { path: 'create', component: CreateComponent },
  { path: 'view', component: ViewComponent },
  { path: 'update/:id', component: UpdateComponent },  
  { path: 'delete/:id', component: DeleteComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
