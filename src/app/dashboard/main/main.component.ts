import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Form, FormControl } from '@angular/forms';
import { SocialMediaService } from '../service/social-media.service';
import { SessionService } from 'src/app/gestion-session/service/session.service';

declare const $: any;
declare const Chart: any;
declare const window: any;


@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
listSession : any ;
class :any ;
num:any ;
facebookUrl:any ;
instagramUrl: any ;
linkedinUrl :any ;
websiteUrl : any ;
link:string ;

facebookUrlForm : FormGroup  ;
instagramUrlForm : FormGroup ;
linkedinUrlForm : FormGroup ;
websiteUrlForm : FormGroup ;
	constructor(private fb : FormBuilder, private socialmediaService : SocialMediaService , private sessionService : SessionService) {
		this.facebookUrlForm=this.fb.group({
			url:new FormControl()
		});
		this.instagramUrlForm=this.fb.group({
			url:new FormControl()
		});
		this.linkedinUrlForm=this.fb.group({
			url:new FormControl()
		});
		this.websiteUrlForm=this.fb.group({
			url:new FormControl()
		});
	 }

	ngOnInit() {

		
		this.num=this.getPercentag(7,2) ;
		this.class="progress-bar l-bg-purple width-per-" ;

		//******************get urls****************** */
		this.getFacebookUrl() ;
		this.getInstagramUrl();
		this.getLinkidenUrl() ;
		this.getWebsiteUrl() ;

		//*******************get sessions*************** */
		this.getListSession() ;



	}


	//******************************************************************* */

	getPercentag (max:number,now:number){

		return Math.round((now*100)/max) ;
	}

	//************************get URLs**************************** *
	getFacebookUrl(){
		this.socialmediaService.getFacebookUrlService().subscribe(data=>{
			this.facebookUrl=data.url ;
			console.log(data.url);
			this.facebookUrlForm.patchValue({
				url:this.facebookUrl 
			});
		}) ;

	}

	getInstagramUrl(){
		this.socialmediaService.getInstagramUrlService().subscribe(data=>{
			this.instagramUrl=data.url ;
			this.instagramUrlForm.patchValue({
				url:this.instagramUrl 
			});
		}) ;

	}

	getLinkidenUrl(){
		this.socialmediaService.getlinkedinUrlService().subscribe(data=>{
			this.linkedinUrl=data.url ;
			this.linkedinUrlForm.patchValue({
				url:this.linkedinUrl 
			});
		})

	}

	getWebsiteUrl(){
		this.socialmediaService.getwebSiteUrlService().subscribe(data=>{
			this.websiteUrl=data.url ;
			this.websiteUrlForm.patchValue({
				url:this.websiteUrl 
			});
	
		})

	}
 
  //*******************************update urls*********************************** */

  addFacebookUrl(form:FormGroup){
	  const url =form.get('url').value ;
	  this.socialmediaService.updateFacebookService(url).subscribe(data=>{
		  console.log(data) ;
	  })

	  this.getFacebookUrl() ;
	  $('#facebookUrl').modal('hide');
	  this.showNotification("bg-green", " Done Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight")
  }

  addInstagramUrl(form:FormGroup){
	const url =form.get('url').value ;
	this.socialmediaService.updateInstagramService(url).subscribe(data=>{
		console.log(data) ;
	})
	this.getInstagramUrl() ;
	$('#instagramUrl').modal('hide');
	this.showNotification("bg-green", " Done Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight")
  }

  addLinkedinUrl(form:FormGroup){
	const url =form.get('url').value ;
	this.socialmediaService.updateLinkedinService(url).subscribe(data=>{
		console.log(data) ;
	})
	this.getLinkidenUrl() ;
	$('#linkedinUrl').modal('hide');
	this.showNotification("bg-green", " Done Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight")
  }

  addWebsiteUrl(form:FormGroup){
	const url =form.get('url').value ;
	this.socialmediaService.updateWebsiteService(url).subscribe(data=>{
		console.log(data) ;
	})
	this.getWebsiteUrl() ;
	$('#websiteUrl').modal('hide');
	this.showNotification("bg-green", " Done Successfully", "bottom", "right", "animated fadeInRight", "animated fadeOutRight")
  }

//*********************************get session list************************************************************* */


getListSession(){
	this.sessionService.getSessionListService().subscribe(data=>{
		this.listSession=data ;
	})
}















//***************************************************************** */

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
