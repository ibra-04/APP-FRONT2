import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormsModule } from '@angular/forms';
import{ ActivatedRoute, Router} from '@angular/router' ;
import { CategoService } from '../services/catego.service';
declare const $ : any ;
@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.sass']
})
export class UpdateCategorieComponent implements OnInit {

  categorie:any ;
  id :number ;
  updateCategorieForm:FormGroup ;
  constructor(private route:ActivatedRoute,private categorieService:CategoService,private fb:FormBuilder,private router : Router) {

    this.updateCategorieForm = this.fb.group({
      nom : new FormControl() ,
      status : new FormControl() ,
    })

   }

  ngOnInit() {
$('select').formSelect() ;

this.id = this.route.snapshot.params['id'];
this.categorieService.getCategorieService(this.id).subscribe(data=>{
this.categorie=data;
this.updateCategorieForm.patchValue({
  nom:this.categorie.nom ,
  status:this.categorie.status,

});
console.log(this.categorie) ;

})

  }



//**************************************************************************************** */

  updateCategorie(form:FormGroup){

    const categorieUpdated=form.value ;
    this.categorieService.editCategorieService(categorieUpdated,this.id).subscribe(data=>{
      console.log(data) ;
    })

    this.showNotification("bg-green", "Update Record Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight");
    this.router.navigate(['gestion-categorie/liste-categorie']);

  }
  //**************************************************************************************** */

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