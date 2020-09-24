import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'gestion-formateur',
        loadChildren: () => import('./gestion-formateur/gestion-formateur.module').then(m => m.GestionFormateurModule)
    },
    {
        path: 'gestion-categorie',
        loadChildren: () => import('./gestion-categorie/gestion-categorie.module').then(m => m.GestionCategorieModule)
    },
{

    path:'gestion-formation',
    loadChildren: () =>import('./gestion-formation/gestion-formation.module').then(m => m.GestionFormationModule) 
},
{

    path:'gestion-session',
    loadChildren: () =>import('./gestion-session/gestion-session.module').then(m => m.GestionSessionModule) 
},

{

    path:'gestion-participant',
    loadChildren: () =>import('./gestion-participant/gestion-participant.module').then(m => m.GestionParticipantModule) 
},

{

    path:'email',
    loadChildren: () =>import('./boite-reception/boite-reception.module').then(m => m.BoiteReceptionModule) 
},

 


    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
