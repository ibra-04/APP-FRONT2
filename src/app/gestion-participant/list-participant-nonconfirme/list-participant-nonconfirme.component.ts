import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { ParticipantService } from '../services/participant.service';
declare const $: any;
@Component({
  selector: 'app-list-participant-nonconfirme',
  templateUrl: './list-participant-nonconfirme.component.html',
  styleUrls: ['./list-participant-nonconfirme.component.sass']
})
export class ListParticipantNonconfirmeComponent implements OnInit {
  @ViewChild('roleTemplate', { static: true }) roleTemplate: TemplateRef<any>;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  participantDetails :any ;
  color:string ;
  listParticipant: any ;
  constructor(private router : Router ,private participantService : ParticipantService ) { }

  ngOnInit() {
    setTimeout(() => {
      
   
    $('#js-basic-example').DataTable({
      "createdRow": function( row, data, dataIndex){
        if( data.dejaconfirme == "false"){
            $(row).addClass('red');
        }},
      responsive: true
    })
  }, 800);
    this.participantService.getParticipantNonConfirmeListService().subscribe(data=>{
      this.listParticipant=data ;
      console.log(data) ;
    })
  }


  confirmeRow(id){
    this.router.navigate['gestion-participant/confirme-participant/'+id] ;
  }

  markascontacted(participant){

    this.participantDetails=participant ;
  }

  deleteRow(id){
    this.participantService.deleteParticipantNonConfirmeService(id).subscribe(data=>{
      console.log(data) ;
      this.participantService.getParticipantNonConfirmeListService().subscribe(data=>{
        this.listParticipant=data ;
        console.log(data) ;
      })
    })
    this.showNotification("bg-red", "Delete Record Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight") ;
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
