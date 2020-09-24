import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionFormateurRoutingModule } from './gestion-formateur-routing.module';
import { ListeFormateurComponent } from './liste-formateur/liste-formateur.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { UpdateFormateurComponent } from './update-formateur/update-formateur.component';
import { RouterModule } from '@angular/router';
import {PdfViewerModule} from 'ng2-pdf-viewer' ;


@NgModule({
  declarations: [ListeFormateurComponent, AddFormateurComponent, UpdateFormateurComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    GestionFormateurRoutingModule,
    RouterModule,
    HttpClientModule,
    PdfViewerModule

  ],
  
})
export class GestionFormateurModule { }
