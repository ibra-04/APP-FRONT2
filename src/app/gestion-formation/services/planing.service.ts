import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaningService {

  constructor(private http:HttpClient) { }

  deletePlaningService(id): Observable<any>{
    return this.http.delete("http://localhost:8080/gestionPlaning/deletePlaning/"+id,{responseType:'text'});
    } 
    
    //****************************************************************************** */
    
    getPlaningListService (formationid) : Observable<any>{
      return this.http.get("http://localhost:8080/gestionPlaning//getPlaningByFormationId/"+formationid);    
    }
    //****************************************************************************** */
    addPlaningService (planing): Observable<any> {
        return this.http.post('http://localhost:8080/gestionPlaning/addPlaning', planing);
      }
      //****************************************************************************** */
    editPlaningService (planing,id):Observable<Object> {
      return this.http.put("http://localhost:8080/gestionPlaning/updatePlaning/"+id,planing) ;
    }
    //****************************************************************************** */
    getPlaningService (id) : Observable<any>{
      return this.http.get("http://localhost:8080/gestionPlaning/getPlaning/"+id) ;
    }
}
