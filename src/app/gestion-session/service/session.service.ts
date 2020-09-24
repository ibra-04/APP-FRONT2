import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private baseUrl = 'http://localhost:3000/sessions';
  constructor(private http:HttpClient) { }

  deleteSessionService(id): Observable<any>{
    return this.http.delete('http://localhost:8080/gestionSession/deleteSession/'+id,{responseType:'text'});
    } 
    
    //****************************************************************************** */
    
    getSessionListService () : Observable<any>{
      return this.http.get("http://localhost:8080/gestionSession/listSession");    
    }
    //****************************************************************************** */
    addSessionService (session): Observable<Object> {
        return this.http.post("http://localhost:8080/gestionSession/addSession", session);
      }
      //****************************************************************************** */
    editSessionService (session,id):Observable<Object> {
      return this.http.put("http://localhost:8080/gestionSession/updateSession/"+id, session) ;
    }
    //****************************************************************************** */
    getSessionService (id) : Observable<any>{
      return this.http.get("http://localhost:8080/gestionSession/getSession/"+id) ;
    }
}
