import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http:HttpClient) { }

  deleteParticipantNonConfirmeService(id): Observable<any>{
    return this.http.delete('http://localhost:8080/gestionParticipantNonConfirme/deleteParticipantNonConfirme/'+id,{responseType:'text'});
    } 
    
    //****************************************************************************** */
    
    
    getParticipantNonConfirmeListService () : Observable<any>{
      return this.http.get("http://localhost:8080/gestionParticipantNonConfirme/listParticipantNonConfirme");    
    }


    //****************************************************************************** */
    getParticipantNonConfirmeService (id) : Observable<any>{
      return this.http.get("http://localhost:8080/gestionParticipantNonConfirme/getParticipantNonConfirme/"+id) ;
    }


    //****************************************************************************** */
   confirmeParticipantNonConfirmeService (id) : Observable<any>{
      return this.http.put("http://localhost:8080/gestionParticipantNonConfirme/confirmeParticipant/"+id,"confirme") ;
    }
}
