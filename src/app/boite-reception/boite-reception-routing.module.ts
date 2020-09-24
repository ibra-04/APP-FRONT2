import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';


const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inbox',
    pathMatch: 'full'
  },
  {
    path:'inbox',
    component:InboxComponent ,
  },
  {
    path:'compose',
    component:ComposeComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoiteReceptionRoutingModule { }
