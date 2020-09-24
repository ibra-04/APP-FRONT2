import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GestionFormateurService {

  constructor(private http:HttpClient) { }

  deleteFormateurService(id): Observable<any>{
    return this.http.delete("http://localhost:8080/gestionFormateur/deleteFormateur/"+id,{responseType:'text'});
    } 
    
    //****************************************************************************** */
    
    getFormateurListService () : Observable<any>{
      return this.http.get("http://localhost:8080/gestionFormateur/listFormateur");    
    }
    //****************************************************************************** */
    addFormateurService (formdata:FormData): Observable<any> {
        return this.http.post('http://localhost:8080/gestionFormateur/addFormateur', formdata);
      }
      //****************************************************************************** */
    editFormateurService (formadata:FormData,id):Observable<Object> {
      return this.http.put("http://localhost:8080/gestionFormateur/updateFormateur/"+id,formadata) ;
    }
    //****************************************************************************** */
    getFormateurService (id) : Observable<any>{
      return this.http.get("http://localhost:8080/gestionFormateur/getFormateur/"+id) ;
    }
    getFormateurCvService(filename): Observable<any>{
      const param = new HttpParams().set('cv', filename)
      return this.http.get('http://localhost:8080/gestionFormateur/getcv',{params:param,responseType: 'arraybuffer'}) ;
    }
    banFormateurService(id): Observable<any>{
      return this.http.put('http://localhost:8080/gestionFormateur/banFormateur/'+id,"ancien") ;
    }
    
    getFormateurTravaillantActuel():Observable<any>{
      return this.http.get("http://localhost:8080/gestionFormateur/getFormateurByStatus/travaillant actuel");
    }

}
