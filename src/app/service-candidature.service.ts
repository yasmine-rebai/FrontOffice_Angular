import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import{Candidature} from './Models/Candidature'
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceCandidatureService {
  urlApi = 'http://localhost:8084/test';  // URL de l'API

  constructor(private http: HttpClient ) {

  }
  
  getCandidature(){
    return this.http.get<any>("http://localhost:8084/test/findAllcandidates");

  }
  



  deleteCandidature(id: number) : Observable<Candidature[]>{
    return this.http.delete<[Candidature]>(this.urlApi+"/supp/"+id);
  }



  postCandidature(data : any){
    return this.http.post<any>("http://localhost:8084/test/newcandidates",data);

  }
 /* addExperience(experience:Experience): Observable<Experience>{
    return this.http.post<Experience>(`${this.urlApi+"/add"}`,experience);
  }*/

  updateCandidature(data:any,id:number){

    return this.http.put<any>("http://localhost:8084/test/updatecandidate/"+id,data)
    }
    /*updateCandidature(id:number, candidature: Candidature){


    return this.http.put(`${this.urlApi+"/updatecandidate/"+id}`,candidature);
   }*/

   getCandidatureById(id:Number){
     return this.http.get<Candidature>(this.urlApi+"/getByIdcandidate/"+id);
   }


}
