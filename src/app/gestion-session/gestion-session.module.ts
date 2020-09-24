import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionSessionRoutingModule } from './gestion-session-routing.module';
import { ListeSessionComponent } from './liste-session/liste-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UpdateSessionComponent } from './update-session/update-session.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { ParticipantConfirmeComponent } from './participant-confirme/participant-confirme.component';
import {BsDatepickerModule,DatepickerModule} from 'ngx-bootstrap/datepicker';
import { GestionFormateurService } from '../gestion-formateur/services/Gestion-formateur.service';
import { GestionFormationModule } from '../gestion-formation/gestion-formation.module';
import { AddParticipantConfirmeComponent } from './add-participant-confirme/add-participant-confirme.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CustomFormsModule } from 'ng2-validation'
import { ArchwizardModule } from 'angular-archwizard';
@NgModule({
  declarations: [ ListeSessionComponent, UpdateSessionComponent, AddSessionComponent, ParticipantConfirmeComponent, AddParticipantConfirmeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    RouterModule,
    HttpClientModule,
    GestionSessionRoutingModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot() ,
    ArchwizardModule,
    DropzoneModule,
    CKEditorModule,
    CustomFormsModule

  ],

  providers:[
    GestionFormateurService,
    GestionFormationModule
  ]
})
export class GestionSessionModule { }
