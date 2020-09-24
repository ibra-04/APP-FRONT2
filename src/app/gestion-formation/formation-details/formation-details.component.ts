import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FormationService } from '../services/formation.service';
import { CategoService } from 'src/app/gestion-categorie/services/catego.service';
import { GestionFormateurService } from 'src/app/gestion-formateur/services/Gestion-formateur.service';
import { Formation } from '../shared/formation';
import { Formateur } from 'src/app/gestion-formateur/shared/formateur';
import { ObjectifService } from '../services/objectif.service';
import { PlaningService } from '../services/planing.service';
declare const $: any;
declare const M: any;
@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.sass']
})
export class FormationDetailsComponent implements OnInit {

  objectifList:any ;
  planingList:any ;
  id:number ;
  formation:Formation ;
  formateur:Formateur ;
  formateurid:string ;
  objectifFormGroup:FormGroup ;
  planingFormGroup:FormGroup ;
  constructor(private fb: FormBuilder,private formateurService:GestionFormateurService,private router : Router,private formationService : FormationService,private categorieService:CategoService , private route:ActivatedRoute,private objectifService:ObjectifService,private planingService : PlaningService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

 
    this.getFormation(this.id) ;
    this.getObjectif(this.id) ;
    this.getPlaning(this.id) ;

    this.objectifFormGroup=this.fb.group(
      {
        
        objectifs: this.fb.array([
          this.addObjectifFormGroup() ,
        ])

      }

    ) ;

    this.planingFormGroup=this.fb.group(
      {
        
        planings: this.fb.array([
          this.addPlaningFormGroup() ,
        ])

      }

    ) ;
 
  
  }

/******************************************************************* */
  addObjectifFormGroup():FormGroup{
    return this.fb.group({
      formationid:[this.id] ,
      objectif:[] ,
    });
  }
//************************************************************************** */
  get objectifs() {
    return this.objectifFormGroup.get('objectifs') as FormArray;
  }
  //********************************************************************** */
  addObjectif() {
    this.objectifs.push(this.addObjectifFormGroup());
  }
//************************************************************************ */
  deleteObjectif(index) {
    this.objectifs.removeAt(index);
  }
//********************************************************************** */


/******************************************************************* */
addPlaningFormGroup():FormGroup{
  return this.fb.group({
    formationid:[this.id] ,
    planing:[] ,
  });
}
//************************************************************************** */
get planings() {
  return this.planingFormGroup.get('planings') as FormArray;
}
//********************************************************************** */
addPlaning() {
  this.planings.push(this.addPlaningFormGroup());
}
//************************************************************************ */
deletePlaning(index) {
  this.planings.removeAt(index);
}
//********************************************************************** */









  getFormateur(id){
    this.formateurService.getFormateurService(id).subscribe(data=>{
      this.formateur=data ;
      console.log(data) ;
    })
  }

  getFormation(id){
    this.formationService.getFormationService(id).subscribe(data=>{
      this.formation=data ;
      this.formateurid=this.formation.formateur ;

      this.formateurService.getFormateurService(this.formateurid).subscribe(data=>{
        this.formateur=data ;
        console.log(data) ;
      });
      console.log(data) ;
    })
  }
//******************************************************************************* */

getObjectif(id){
this.objectifService.getObjectifListService(id).subscribe(data=>{
  this.objectifList=data ;
  console.log(data) ;
})
}

addObjectifsToDB(form:FormGroup){

for(let o of this.objectifs.controls){
 this.objectifService.addObjectifService(o.value).subscribe(data=>{
   console.log(data) ;
   this.getObjectif(this.id) ;
 })
}

this.showNotification("bg-green", "Add Record Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight")
this.clearTheObjectifForm() ;

}
//************************************************************************** */
clearTheObjectifForm(){
  while(this.objectifs.length!=0){
    this.objectifs.removeAt(0) ;
  }
}
//********************************************************************* */
deleteObjectifFromDB(id){
  this.objectifService.deleteObjectifService(id).subscribe(data=>{
    console.log(data) ;
    this.getObjectif(this.id) ;
  })
  this.showNotification("bg-red", "Delete Record Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight") ;
}
//********************************Planing**************************************************************************** */

getPlaning(id){
  this.planingService.getPlaningListService(id).subscribe(data=>{
    this.planingList=data ;
    console.log(data) ;
  })
  }
  
  addPlaningsToDB(form:FormGroup){
  
  for(let o of this.planings.controls){
   this.planingService.addPlaningService(o.value).subscribe(data=>{
     console.log(data) ;
     this.getPlaning(this.id) ;
   })
  }
  
  this.showNotification("bg-green", "Add Record Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight")
  this.clearThePlaningForm() ;
  
  }
  //************************************************************************** */
  clearThePlaningForm(){
    while(this.planings.length!=0){
      this.planings.removeAt(0) ;
    }
  }
  //********************************************************************* */
  deletePlaningFromDB(id){
    this.planingService.deletePlaningService(id).subscribe(data=>{
      console.log(data) ;
      this.getPlaning(this.id) ;
    })
    this.showNotification("bg-red", "Delete Record Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight") ;
  }


//********************************************************************************************* */
showNotification(colorName, text, placementFrom, placementAlign, animateEnter, animateExit) {
  if (colorName === null || colorName === '') { colorName = 'bg-black'; }
  if (text === null || text === '') { text = 'Turning standard Bootstrap alerts'; }
  if (animateEnter === null || animateEnter === '') { animateEnter = 'animated fadeInDown'; }
  if (animateExit === null || animateExit === '') { animateExit = 'animated fadeOutUp'; }
  var allowDismiss = true;

  $.notify({
    message: text
  },
    {
      type: colorName,
      allow_dismiss: allowDismiss,
      newest_on_top: true,
      timer: 1000,
      placement: {
        from: placementFrom,
        align: placementAlign
      },
      animate: {
        enter: animateEnter,
        exit: animateExit
      },
      template: '<div data-notify="container" class="bootstrap-notify-container alert alert-dismissible {0} ' + (allowDismiss ? "p-r-35" : "") + '" role="alert">' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}

}
