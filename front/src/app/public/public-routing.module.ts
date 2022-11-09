import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PlayoutComponent } from './playout/playout.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [

  {
    path: '', component: PlayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      { path: 'home', component: HomeComponent },
      { path: 'produit', component: ProduitComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },

];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
