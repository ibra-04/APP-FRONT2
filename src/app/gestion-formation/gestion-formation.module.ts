import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionFormationRoutingModule } from './gestion-formation-routing.module';
import { ListeFormationComponent } from './liste-formation/liste-formation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { GestionFormateurService } from '../gestion-formateur/services/Gestion-formateur.service';
import { CategoService } from '../gestion-categorie/services/catego.service';
import { BrowserModule } from '@angular/platform-browser';

import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';


@NgModule({
  declarations: [ListeFormationComponent, AddFormationComponent, UpdateFormationComponent, FormationDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    RouterModule,
    HttpClientModule,
    GestionFormationRoutingModule,


    

  ],
  providers:[
    GestionFormateurService,
    CategoService,
  ]
})
export class GestionFormationModule { }
