import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Form,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ParticipantConfirmeService } from '../service/participant-confirme.service';
import { error } from 'protractor';
declare const $: any;
@Component({
  selector: 'app-add-participant-confirme',
  templateUrl: './add-participant-confirme.component.html',
  styleUrls: ['./add-participant-confirme.component.sass']
})
export class AddParticipantConfirmeComponent implements OnInit {

  addParticipantConfirmeForm : FormGroup ;
  submitted = false;

  id:number ;


  constructor(private fb : FormBuilder , private route : Router , private router : ActivatedRoute, private participantConfirmeService : ParticipantConfirmeService ) {}
    ngOnInit() {
        this.id=this.router.snapshot.params['id'] ;

      this.addParticipantConfirmeForm = this.fb.group({
          nom: ['', Validators.required],
          prenom: ['', Validators.required],
          cin: ['', [Validators.required]],
          mail: ['', [Validators.required, Validators.email]],
          telephone: ['', [Validators.required]],
          profession: ['', [Validators.required]],
          lieudetravail: ['', [Validators.required]],
          sessionid:[this.id]
          
      });




  }


  // convenience getter for easy access to form fields
  get f() { return this.addParticipantConfirmeForm.controls; }

  onSubmit(form:FormGroup) {

      this.submitted = true;

      // stop here if form is invalid
      if (this.addParticipantConfirmeForm.invalid) {
          return;
      }
      this.participantConfirmeService.addParticipantConfirmeService(form.value).subscribe(data=>{
          console.log(data) ;
      })
        this.showNotification("bg-green", "Add Record Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight")
  this.route.navigate(['gestion-session/participant-confirme/'+this.id]);

     
  }

  goBack(){
    this.route.navigate(['gestion-session/participant-confirme/'+this.id]);
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

