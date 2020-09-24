import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjectifService {
  constructor(private http:HttpClient) { }

  deleteObjectifService(id): Observable<any>{
    return this.http.delete("http://localhost:8080/gestionObjectif/deleteObjectif/"+id,{responseType:'text'});
    } 
    
    //****************************************************************************** */
    
    getObjectifListService (formationid) : Observable<any>{
      return this.http.get("http://localhost:8080/gestionObjectif//getObjectifByFormationId/"+formationid);    
    }
    //****************************************************************************** */
    addObjectifService (objectif): Observable<any> {
        return this.http.post('http://localhost:8080/gestionObjectif/addObjectif', objectif);
      }
      //****************************************************************************** */
    editObjectifService (objectif,id):Observable<Object> {
      return this.http.put("http://localhost:8080/gestionObjectif/updateObjectif/"+id,objectif) ;
    }
    //****************************************************************************** */
    getObjectifService (id) : Observable<any>{
      return this.http.get("http://localhost:8080/gestionObjectif/getObjectif/"+id) ;
    }


}
