import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute, Router} from '@angular/router' ;
import { from } from 'rxjs';
import { GestionFormateurService } from '../services/Gestion-formateur.service' ;
import {Formateur} from '../shared/formateur' ;
import { formatRange } from '@fullcalendar/core';
import { FormGroup, FormBuilder, FormControl, FormsModule } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { FormationService } from 'src/app/gestion-formation/services/formation.service';
declare const $: any;
@Component({
  selector: 'app-update-formateur',
  templateUrl: './update-formateur.component.html',
  styleUrls: ['./update-formateur.component.sass']
})

export class UpdateFormateurComponent implements OnInit {
 id="" ;
 private sub:any ;
 formateur:Formateur ;
 updateFormateurForm:FormGroup ;
 cvFormateur:any=File ;
 listFormations:[] ;
  constructor(private route:ActivatedRoute,private formateurService:GestionFormateurService,private fb:FormBuilder,private router : Router,private formationService : FormationService) { 
    this.updateFormateurForm=this.fb.group({
      nom: new FormControl(),
      prenom: new FormControl(),
      mail: new FormControl(),
      telephone: new FormControl(),
      status: new FormControl(),
      formation:new FormControl(),
    });
  }

  ngOnInit() {
    this.getListFormations() ;
    $('select').formSelect();
    
    this.id = this.route.snapshot.params['id'];
   
   this.formateurService.getFormateurService(this.id).subscribe(data =>{
    this.formateur=data ,console.log(this.formateur) ;this.updateFormateurForm.patchValue({

      nom:this.formateur.nom,
      prenom:this.formateur.prenom,
      mail:this.formateur.mail ,
      telephone:this.formateur.telephone ,
      formation:this.formateur.formation,
      status:this.formateur.status,

    })
  },error=> console.log(error)) ;
  }


  onFileChange(event) {
    const file = event.target.files[0] ;
    this.cvFormateur=file ;
   
    }

  
//********************************************************************************* */
getListFormations(){
  this.formationService.getFormationListService().subscribe(data=>{
    this.listFormations=data ;
    console.log(data) ;
  })
}

//******************************************************************************** */
  updateFormateur(form:FormGroup){

    const formateur =form.value ;
    const formdata = new FormData() ;
    formdata.append('formateur',JSON.stringify(formateur)) ;
    formdata.append('cvFormateur',this.cvFormateur) ;
        this.formateurService.editFormateurService(formdata,this.id).subscribe(data => console.log(data), error => console.log(error)) ;
        form.reset();
    this.formateur=new Formateur() ;
        this.showNotification("bg-green", "Update Record Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight");
        this.router.navigate(['gestion-formateur/liste-formateur']);
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
