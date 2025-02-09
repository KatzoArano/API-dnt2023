import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAddComponent } from './p-add/p-add.component';
import { PDeleteComponent } from './p-delete/p-delete.component';
import { PEditComponent } from './p-edit/p-edit.component';
import { PIndexComponent } from './p-index/p-index.component';

const routes: Routes = [
  { path: '', component: PIndexComponent },
  { path: 'add', component: PAddComponent },
  { path: 'edit/:id', component: PEditComponent },
  { path: 'delete/:id', component: PDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
