import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionParticipantRoutingModule } from './gestion-participant-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ArchwizardModule } from 'angular-archwizard';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CustomFormsModule } from 'ng2-validation';
import { ListParticipantNonconfirmeComponent } from './list-participant-nonconfirme/list-participant-nonconfirme.component';
import { ConfirmeParticipantComponent } from './confirme-participant/confirme-participant.component';


@NgModule({
  declarations: [ListParticipantNonconfirmeComponent, ConfirmeParticipantComponent],
  imports: [
    CommonModule,
    GestionParticipantRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    RouterModule,
    HttpClientModule,
    ArchwizardModule,
    DropzoneModule,
    CKEditorModule,
    CustomFormsModule
  ]
})
export class GestionParticipantModule { }
