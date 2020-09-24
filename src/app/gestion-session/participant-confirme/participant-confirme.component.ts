import { Component, OnInit } from '@angular/core';
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';
import { ParticipantConfirmeService } from '../service/participant-confirme.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../service/session.service';
declare const $: any;
@Component({
  selector: 'app-participant-confirme',
  templateUrl: './participant-confirme.component.html',
  styleUrls: ['./participant-confirme.component.sass']
})
export class ParticipantConfirmeComponent implements OnInit {

  id:number ;
  session:any ;
  listParticipant: any;
  constructor(private dynamicScriptLoader: DynamicScriptLoaderService,private participantConfirmeService : ParticipantConfirmeService,private router:ActivatedRoute , private sessionService: SessionService, private route : Router) { }

  ngOnInit() {
    this.id=this.router.snapshot.params['id'] ;
    this.sessionService.getSessionService(this.id).subscribe(data=>{
      this.session=data ;
    });



    this.startScript();

    this.participantConfirmeService.getParticipantConfirmeBySessionService(this.id).subscribe(data=>{
      this.listParticipant=data ;
      console.log(this.listParticipant) ;
    }) ;

  }

  async startScript() {
    await this.dynamicScriptLoader.load('dataTables.buttons', 'buttons.flash', 'jszip', 'buttons.html5', 'buttons.print').then(data => {
      setTimeout(() => {
        this.loadData();
      }, 600);
      
    }).catch(error => console.log(error));
  }




  private loadData() {
    
    $('#tableExport').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    });
  }

  deleteRow(id){
    this.participantConfirmeService.deleteParticipantConfirmeService(id).subscribe(data=>{
      console.log(data) ;
      this.participantConfirmeService.getParticipantConfirmeBySessionService(this.id).subscribe(data=>{
        this.listParticipant=data ;
        console.log(this.listParticipant) ;
      }) ;

    }) ;
    this.showNotification("bg-red", "Delete Record Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight") ;
  }


  goToAddParticipantConfirme(){
    this.route.navigate(['/gestion-session/add-participant-confirme',this.id] );
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
