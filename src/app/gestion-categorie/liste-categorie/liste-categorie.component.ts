
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';

import { from } from 'rxjs';
import { Router } from '@angular/router';
import { CategoService } from '../services/catego.service';
declare const $: any;
declare const M: any;
@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.sass']
})
export class ListeCategorieComponent implements OnInit {

@ViewChild('roleTemplate', { static: true }) roleTemplate: TemplateRef<any>; 
@ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;


rows = [];
selectedName: string = "";


selectedRowData: selectRowInterface;



columns = [
   { name: 'id' }, { name: 'categorieNom' }
];

allColumns = [{ name: 'id' }, { name: 'categorieNom' }];

categories=[];
data= [];
filteredData = [];

addRowForm:FormGroup ;
  constructor( private router:Router, private categorieService:CategoService) { 

 
  }
//********************************************************************************** */

  ngOnInit() {
    $('select').formSelect();

    this.reloadDataSearch() ;
    this.reloadData();
    console.log(this.categories) ;
  }

  editRow(row) {

    this.router.navigate(['gestion-categorie/update-categorie',row.id]);
  }


//************************************************************************************** */

startCategorie(row){
  this.categorieService.startCategorieService(row.id).subscribe(data=>{
    console.log(data) ;
    this.reloadData() ;
  })
}

//*********************************************************************************** */
  deleteRow(row) {
     console.log(row.id);
    this.categorieService.deleteCategorieService(row.id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
      this.reloadDataSearch() ;
    this.showNotification("bg-red", "Delete Record Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight") ;
    
}
  

  //***************************************************************************** */
 
  reloadData(){
   this.categorieService.getCategorieListService().subscribe(data =>this.categories=data) ;
    
  }

//********************************************************* *
  reloadDataSearch(){
    this.categorieService.getCategorieListService().subscribe(data =>this.filteredData=data) ;
     
   }
//*********************************************************************************** */

  





 
//************************************************************************************************* */
  filterDatatable(event) {
    // get the value of the key pressed and make it lowercase
    let val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    let colsAmt = this.columns.length;
    // get the key names of each column in the dataset
    let keys = Object.keys(this.filteredData[0]);
    // assign filtered matches to the active datatable
    this.categories = this.filteredData.filter(function (item) {
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

///*********************************************************************** */
}
export interface selectRowInterface {
  img: String;
  firstName: String;
  lastName: String;
}