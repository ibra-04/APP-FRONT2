import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipantConfirmeService {
  constructor(private http:HttpClient) { }

  deleteParticipantConfirmeService(id): Observable<any>{
    return this.http.delete('http://localhost:8080/gestionParticipantConfirme/deleteParticipantConfirme/'+id,{responseType:'text'});
    } 
    
    //****************************************************************************** */
    
    getParticipantConfirmeListService () : Observable<any>{
      return this.http.get("http://localhost:8080/gestionParticipantConfirme/listParticipantConfirme");    
    }
    //****************************************************************************** */
    addParticipantConfirmeService (participant): Observable<Object> {
        return this.http.post("http://localhost:8080/gestionParticipantConfirme/addParticipantConfirme", participant);
      }
      //****************************************************************************** */
    editParticipantConfirmeService (participant,id):Observable<Object> {
      return this.http.put("http://localhost:8080/gestionParticipantConfirme/updateSession/"+id, participant) ;
    }
    //****************************************************************************** */
    getParticipantConfirmeService (id) : Observable<any>{
      return this.http.get("http://localhost:8080/gestionParticipantConfirme/getParticipantConfirme/"+id) ;
    }

    getParticipantConfirmeBySessionService (sessionid) : Observable<any>{
      return this.http.get("http://localhost:8080/gestionParticipantConfirme/listParticipantConfirmeBySessionid/"+sessionid) ;
    }
    
}
