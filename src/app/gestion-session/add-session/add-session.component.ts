import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { SessionService } from '../service/session.service';
import { GestionFormateurService } from 'src/app/gestion-formateur/services/Gestion-formateur.service';
import { FormationService } from 'src/app/gestion-formation/services/formation.service';
declare const $:any ;
@Component({
  selector: 'app-add-session' ,
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.sass']
})
export class AddSessionComponent implements OnInit {
listFormateurs:any ;
listFormations:any ;
submitted = false;
addSessionForm:FormGroup ;
today = new Date();
 dd = String(this.today.getDate()).padStart(2, '0');
 mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
 yyyy = this.today.getFullYear();

 
  constructor(private fb: FormBuilder,private sessionService:SessionService,private router:Router,private formateurService:GestionFormateurService,private formationService:FormationService) {
    this.addSessionForm=this.fb.group({
      nom:['',Validators.required],
      formation:['',Validators.required],
      formateurid:['',Validators.required],
      datedebut:['',Validators.required],
      datefin:['',Validators.required],
      nombreplacelimite:['',Validators.required],


    })
   }
   
    mindate = this.mm + '-' + this.dd + '-' + this.yyyy;
   
  ngOnInit() {
    $("select").formSelect() ;
    this.getListFormateurs() ;
    this.getListFormations() ;
  }

  get f() { return this.addSessionForm.controls; }

getListFormateurs(){
this.formateurService.getFormateurTravaillantActuel().subscribe(data=>{
  this.listFormateurs=data ;
  console.log(data) ;
})
}
getListFormations(){
this.formationService.getFormationEnCours().subscribe(data=>{
  this.listFormations=data ;
})
}

addSession(form:FormGroup){
  this.submitted = true;
  if(this.addSessionForm.invalid){
    return;
  }
  this.sessionService.addSessionService(form.value).subscribe(data=>{
    console.log(data) ;
  });

  this.showNotification("bg-green", "Add Record Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight")
  this.router.navigate(['gestion-session/liste-session']);
}

//***************************************************************************************** */
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
