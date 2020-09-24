import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoService {



  constructor(private http:HttpClient) { }
  
  deleteCategorieService(id): Observable<any>{
    return this.http.delete("http://localhost:8080/gestionCategorie/deleteCategorie/"+id,{responseType:'text'});
    } 
    
    //****************************************************************************** */
    
    getCategorieListService () : Observable<any>{
      return this.http.get("http://localhost:8080/gestionCategorie/listCategories");    
    }
    //****************************************************************************** */
    addCategorieService (categorie): Observable<Object> {
        return this.http.post("http://localhost:8080/gestionCategorie/addCategorie", categorie);
      }
      //****************************************************************************** */
    editCategorieService (categorie,id):Observable<Object> {
      return this.http.put("http://localhost:8080/gestionCategorie/updateCategorie/"+id, categorie) ;
    }
    //****************************************************************************** */
    getCategorieService (id) : Observable<any>{
      return this.http.get("http://localhost:8080/gestionCategorie/getCategorie/"+id) ;
    }
    startCategorieService(id): Observable<any>{
      return this.http.put("http://localhost:8080/gestionCategorie/startCategorie/"+id,"en cours")
    }
    getCategorieEnCoursService():Observable<any>{
      return this.http.get("http://localhost:8080/gestionCategorie/categorieByStatus/En Cours") ;
    }
}
