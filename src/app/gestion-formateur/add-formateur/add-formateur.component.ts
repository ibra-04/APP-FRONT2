import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {GestionFormateurService} from '../services/Gestion-formateur.service' ;
import {Formateur} from '../shared/formateur' ;
import { Observable } from 'rxjs';
import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/gestion-formation/services/formation.service';
declare const $: any;
@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.sass']
})

export class AddFormateurComponent implements OnInit {
  listFormations:[] ;
  addFormateurForm: FormGroup;
  cvFormateur: any = File ;
  constructor(private fb: FormBuilder,private formateurService:GestionFormateurService,private router : Router,private formationService:FormationService) { 
    this.addFormateurForm = this.fb.group({
      nom: new FormControl('',[Validators.required]),
      prenom: new FormControl(),
      mail: new FormControl(),
      telephone: new FormControl(),
      formation: new FormControl(),
      status:new FormControl() ,
  

    });
  }
//************************************************************************************** */
  get f(){
    return this.addFormateurForm.controls;
  }
//************************************************************************************ */
  ngOnInit() {
    $('select').formSelect();
  
    this.getListFormations() ;
  }

//************************************************************************ */
  onFileChange(event) {
  const file = event.target.files[0] ;
  this.cvFormateur=file ;
 
  }
  //************************************************************************* */

  addFormateur(form:FormGroup){
    const formateur =form.value ;
    const formdata =new FormData();
    formdata.append('formateur',JSON.stringify(formateur)) ;
    formdata.append('cvFormateur',this.cvFormateur) ;




    this.formateurService.addFormateurService(formdata).subscribe(data =>{ console.log(data) ;}, error => console.log(error));
   
  
    form.reset();
    
    this.showNotification("bg-green", "Add Record Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight")
    this.router.navigate(['gestion-formateur/liste-formateur']);
  }
//************************************************************************************************************************* */

getListFormations(){
  this.formationService.getFormationListService().subscribe(data=>{
    this.listFormations=data ;
    console.log(data) ;
  })
}


///*************************************************************************************************************** */

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
