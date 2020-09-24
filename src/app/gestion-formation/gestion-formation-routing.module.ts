import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeFormationComponent } from './liste-formation/liste-formation.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'liste-formation',
    pathMatch: 'full'
  },
  {
    path:'liste-formation',
    component:ListeFormationComponent ,
  },
  {
    path:'ajouter-formation',
    component:AddFormationComponent ,
  },
  {
    path:'update-formation/:id',
    component:UpdateFormationComponent ,
  },
  {
    path:'details-formation/:id',
    component:FormationDetailsComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionFormationRoutingModule { }
