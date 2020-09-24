import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http:HttpClient) { }

  deleteFormationService(id): Observable<any>{
    return this.http.delete("http://localhost:8080/gestionFormation/deleteFormation/"+id,{responseType:'text'});
    } 
    
    //****************************************************************************** */
    
    getFormationListService () : Observable<any>{
      return this.http.get("http://localhost:8080/gestionFormation/listFormation");    
    }
    //****************************************************************************** */
    addFormationService (formation): Observable<any> {
        return this.http.post('http://localhost:8080/gestionFormation/addFormation', formation);
      }
      //****************************************************************************** */
    editFormationService (formation,id):Observable<Object> {
      return this.http.put("http://localhost:8080/gestionFormation/updateFormation/"+id,formation) ;
    }
    //****************************************************************************** */
    getFormationService (id) : Observable<any>{
      return this.http.get("http://localhost:8080/gestionFormation/getFormation/"+id) ;
    }

    startFormation(id) : Observable<any>{
      return this.http.put("http://localhost:8080/gestionFormation/startFormation/"+id,"")
    }
  
    getFormationEnCours():Observable<any>{

      return this.http.get("http://localhost:8080/gestionFormation/getFormationByStatus/En Cours");
    }

}
