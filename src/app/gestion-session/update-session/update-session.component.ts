import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { SessionService } from '../service/session.service';
import { GestionFormateurService } from 'src/app/gestion-formateur/services/Gestion-formateur.service';
import { FormationService } from 'src/app/gestion-formation/services/formation.service';
declare const $:any ;
@Component({
  selector: 'app-update-session',
  templateUrl: './update-session.component.html',
  styleUrls: ['./update-session.component.sass']
})
export class UpdateSessionComponent implements OnInit {
  changecount=0 ;
  id:number ;
  session:any ;
  listFormateurs:any ;
  listFormations:any ;
  updateSessionForm:FormGroup ;
  date:String ;

  constructor(private fb: FormBuilder,private sessionService:SessionService,private router:Router,private formateurService:GestionFormateurService,private formationService:FormationService, private route:ActivatedRoute) {
    this.updateSessionForm=this.fb.group({
      nom:new FormControl(),
      formation:new FormControl(),
      formateurid:new FormControl(),
      datedebut:new FormControl(),
      datefin:new FormControl(),
      nombreplacelimite:new FormControl(),
      nombreexistent:new FormControl(),
      datecreation:new FormControl
    })
   }

  ngOnInit() {

    this.id=this.route.snapshot.params['id'] ;
    this.sessionService.getSessionService(this.id).subscribe(data=>{
      this.session=data ;
      this.updateSessionForm.patchValue({
        nom:this.session.nom,
        formation:this.session.formation,
        formateurid:this.session.formateurid,
        nombreplacelimite:this.session.nombreplacelimite,
        datecreation:this.session.datecreation,
        nombreexistent:this.session.nombreexistent,

      })

    })
    $("select").formSelect() ;
    this.getListFormateurs() ;
    this.getListFormations() ;
    this.date="sdfqsfqsd" ;
  }

  
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

    updateSession(form:FormGroup){

      if(this.changecount!=0){
        this.CutTimeZoneDate(form,'datedebut') ;
      }
      
      const sessionUpdated=form.value ;
      this.sessionService.editSessionService(sessionUpdated,this.id).subscribe(data=>{
        console.log(data) ;
      })

      this.showNotification("bg-green", "Add Record Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight")
      this.router.navigate(['gestion-session/liste-session']);
    }


    CutTimeZoneDate(form,controlName){
      let df:Date = form.get(controlName).value
      df.setHours(df.getHours() - df.getTimezoneOffset() / 60);
      form.get(controlName).setValue(df);

      console.log(this.changecount);
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
