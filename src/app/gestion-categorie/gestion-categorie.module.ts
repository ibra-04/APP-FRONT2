import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCategorieRoutingModule } from './gestion-categorie-routing.module';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';



@NgModule({
  declarations: [ListeCategorieComponent, AddCategorieComponent, UpdateCategorieComponent],
  imports: [
    CommonModule,
    GestionCategorieRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    HttpClientModule,
  ],
 
})
export class GestionCategorieModule { }
