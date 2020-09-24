import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DynamicScriptLoaderService } from 'src/app/services/dynamic-script-loader.service';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { SessionService } from '../service/session.service';
declare const $: any;
declare const M: any;
declare const flatpickr: any;
@Component({
  selector: 'app-liste-session',
  templateUrl: './liste-session.component.html',
  styleUrls: ['./liste-session.component.sass']
})
export class ListeSessionComponent implements OnInit {

  @ViewChild('roleTemplate', { static: true }) roleTemplate: TemplateRef<any>;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  
  rows = [];
  selectedName: string = "";
  formData = [];
  selectedRowData: selectRowInterface;

 

  columns = [
     { name: 'nom' },{ name: 'formation' }, { name: 'datecreation' },{name:'datedebut'},{name:'datefin'},{name:'nombreplacelimite'},{name:'nombreexistent'}
  ];



  sessions=[];
  data= [];
  filteredData = [];


  constructor( private router:Router,private sessionService : SessionService) {
 

  }

  ngOnInit() {
    $('select').formSelect();

    this.reloadDataSearch() ;
    this.reloadData();
    console.log(this.sessions) ;
  }




  editRow(row) {
    this.router.navigate(['/gestion-session/update-session',row.id] );
  }





//*********************************************************************************** */
  deleteRow(row) {
     console.log(row.id);
    this.sessionService.deleteSessionService(row.id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
      this.reloadDataSearch() ;
    this.showNotification("bg-red", "Delete Record Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight") ;
    
}

goToParticipants(row){
  this.router.navigate(['/gestion-session/participant-confirme',row.id] );
}
  

  //***************************************************************************** */
 
  reloadData(){
   this.sessionService.getSessionListService().subscribe(data =>this.sessions=data) ;
    
  }
  reloadDataSearch(){
    this.sessionService.getSessionListService().subscribe(data =>this.filteredData=data) ;
     
   }
//*********************************************************************************** */

  addSession() {
    this.router.navigate(['/gestion-session/ajouter-session'] );
  }
//********************************************************************************************* */
 
//************************************************************************************************* */
  filterDatatable(event) {
    // get the value of the key pressed and make it lowercase
    let val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    let colsAmt = this.columns.length;
    // get the key names of each column in the dataset
    let keys = Object.keys(this.filteredData[0]);
    // assign filtered matches to the active datatable
    this.sessions = this.filteredData.filter(function (item) {
      // iterate through each row's column data
      for (let i = 0; i < colsAmt; i++) {
        // check for a match
        if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val) {
          // found match, return true to add to result set
          return true;
        }
      }
    });
    // whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  getId(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
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

export interface selectRowInterface {

}
