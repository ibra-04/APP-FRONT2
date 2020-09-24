import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { FormationService } from '../services/formation.service';

declare const $: any;
declare const M: any;


@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.sass']
})
export class ListeFormationComponent implements OnInit {

  @ViewChild('roleTemplate', { static: true }) roleTemplate: TemplateRef<any>;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  columns = [
    { name: 'nom' }, { name: 'categorie' },{ name: 'duree' },{ name: 'lieu' },{ name: 'certification' },{ name: 'creditPoint' },{ name: 'prix' },{ name: 'status' }
 ];

 formations=[];
 data= [];
 filteredData = [];

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService, private fb: FormBuilder,private router:Router,private formationService : FormationService) { }

  ngOnInit() {
    $('select').formSelect();

    this.reloadDataSearch() ;
    this.reloadData();
    console.log(this.formations) ;
  }

  editRow(row) {
this.router.navigate(['gestion-formation/update-formation',row.id]) ;
  }



//*********************************************************************************** */
  deleteRow(row) {
     console.log(row.id);
    this.formationService.deleteFormationService(row.id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
      this.reloadDataSearch() ;
    this.showNotification("bg-red", "Delete Record Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight") ;
    
}
  


//******************************************************************************************* */

formationDetails(row){
  this.router.navigate(['gestion-formation/details-formation',row.id]) ;
}


  //***************************************************************************** */
 
  reloadData(){
   this.formationService.getFormationListService().subscribe(data =>this.formations=data) ;
    
  }
  reloadDataSearch(){
    this.formationService.getFormationListService().subscribe(data =>this.filteredData=data) ;
     
   }
//********************************************************************************************* */

startFormation(row){
  this.formationService.startFormation(row.id).subscribe(data=>{
    console.log(data) ;
    this.reloadData();
  })
}

  //************************************************************************************************* */
  filterDatatable(event) {
    // get the value of the key pressed and make it lowercase
    let val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    let colsAmt = this.columns.length;
    // get the key names of each column in the dataset
    let keys = Object.keys(this.filteredData[0]);
    // assign filtered matches to the active datatable
    this.formations = this.filteredData.filter(function (item) {
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
  img: String;
  firstName: String;
  lastName: String;
}