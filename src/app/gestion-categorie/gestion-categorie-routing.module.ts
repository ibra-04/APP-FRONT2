import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'liste-categorie',
    pathMatch: 'full'
  },
  {
    path:'liste-categorie',
    component:ListeCategorieComponent ,
  },
  {
    path:'ajouter-categorie',
    component:AddCategorieComponent ,
  },
  {
    path:'update-categorie/:id',
    component:UpdateCategorieComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionCategorieRoutingModule { }
