import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListParticipantNonconfirmeComponent } from './list-participant-nonconfirme/list-participant-nonconfirme.component';
import { ConfirmeParticipantComponent } from './confirme-participant/confirme-participant.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'liste-participant',
    pathMatch: 'full'
  },
  {
    path:'liste-participant',
    component:ListParticipantNonconfirmeComponent ,
  },
  {
    path:'confirme-participant/:id',
    component:ConfirmeParticipantComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionParticipantRoutingModule { }
