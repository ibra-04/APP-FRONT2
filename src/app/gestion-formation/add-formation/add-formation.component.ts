import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators,FormArray } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';
import { Router } from '@angular/router';
import { FormationService } from '../services/formation.service';
import { GestionFormateurService } from 'src/app/gestion-formateur/services/Gestion-formateur.service';
import { CategoService } from 'src/app/gestion-categorie/services/catego.service';
declare const $:any ;
declare const M:any ;
@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.sass']
})
export class AddFormationComponent implements OnInit {

  listFormateurs:any[] ;
  listCategories:any[] ;

  formateurValue=20 ;
  d:number ;
addFormationForm:FormGroup ;

constructor(private fb: FormBuilder,private formateurService:GestionFormateurService,private router : Router,private formationService : FormationService,private categorieService:CategoService) { 
  this.addFormationForm=this.fb.group({
    nom:new FormControl() ,
    categorie:new FormControl() ,
    formateur:new FormControl() ,
    duree:new FormControl() ,
    lieu:new FormControl() ,
    certification:new FormControl() ,
    creditPoint:new FormControl() ,
    prix:new FormControl() ,
    description:new FormControl() ,
    prerequis:new FormControl() ,
    status:new FormControl() ,
 


  })
}

  ngOnInit() {

  
    // Or with jQuery
  
   
      $('select').formSelect();

    this.getListCategories() ;
    this.getListFormateurs() ;
  }




  getListCategories(){

    this.categorieService.getCategorieEnCoursService().subscribe(data=>{
      this.listCategories=data ;
      console.log(data);
      console.log(this.listCategories) ;
    })
  }
  //******************************** */

  getListFormateurs(){

    this.formateurService.getFormateurTravaillantActuel().subscribe(data=>{
      this.listFormateurs=data ;
      console.log(data) ;
    })
  }



  addFormation(form:FormGroup){


    console.log(form.value) ;
    this.formationService.addFormationService(form.value).subscribe(data=>{
      console.log(data) ;
    }) ;
   
   
      
     
       form.reset();
       
       this.showNotification("bg-green", "Add Record Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight")
       this.router.navigate(['gestion-formation/liste-formation']);
     }

   
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
