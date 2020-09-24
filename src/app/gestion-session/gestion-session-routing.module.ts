import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeSessionComponent } from './liste-session/liste-session.component';
import { UpdateSessionComponent } from './update-session/update-session.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { ParticipantConfirmeComponent } from './participant-confirme/participant-confirme.component';
import { AddParticipantConfirmeComponent } from './add-participant-confirme/add-participant-confirme.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'liste-session',
    pathMatch: 'full'
  },
  {
    path:'liste-session',
    component:ListeSessionComponent ,
  },
  {
    path:'ajouter-session',
    component:AddSessionComponent ,
  },
  {
    path:'update-session/:id',
    component:UpdateSessionComponent ,
  },
  {
    path:'participant-confirme/:id',
    component:ParticipantConfirmeComponent ,
  },
  {
    path:'add-participant-confirme/:id',
    component:AddParticipantConfirmeComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionSessionRoutingModule { }
