import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeFormateurComponent } from './liste-formateur/liste-formateur.component';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { UpdateFormateurComponent } from './update-formateur/update-formateur.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'liste-formateur',
    pathMatch: 'full'
  },
  {
    path:'liste-formateur',
    component:ListeFormateurComponent ,
  },
  {
  path:'ajouter-formateur',
  component:AddFormateurComponent,
  },
  {
    path:'update-formateur/:id',
    component:UpdateFormateurComponent,
    },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionFormateurRoutingModule { }
