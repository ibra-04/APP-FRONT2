import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { link } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  constructor(private http:HttpClient) { }


  //***********************get social media details */
  getFacebookUrlService(): Observable<any>{
    return this.http.get('http://localhost:8080/socialMedia/socialMediaByNom/facebook');
    } 

  getInstagramUrlService(): Observable<any>{
    return this.http.get('http://localhost:8080/socialMedia/socialMediaByNom/instagram') ;
  }

  getlinkedinUrlService(): Observable<any>{
    return this.http.get('http://localhost:8080/socialMedia/socialMediaByNom/linkedin') ;
  }

  getwebSiteUrlService(): Observable<any>{
    return this.http.get('http://localhost:8080/socialMedia/socialMediaByNom/fiveSkills') ;
  }
    
    //************************************update SocialMedia links****************************************** */
    
    updateFacebookService(facebook):Observable<any>{
      return this.http.put('http://localhost:8080/socialMedia/changeSocialMediaUrl/facebook',facebook)
      
    }

    updateInstagramService(instagram):Observable<any>{
      return this.http.put('http://localhost:8080/socialMedia/changeSocialMediaUrl/instagram',instagram)
      
    }

    updateLinkedinService(linkedin):Observable<any>{
      return this.http.put('http://localhost:8080/socialMedia/changeSocialMediaUrl/linkedin',linkedin)
      
    }

    updateWebsiteService(website):Observable<any>{
      return this.http.put('http://localhost:8080/socialMedia/changeSocialMediaUrl/fiveSkills',website)
      
    }

}
