import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import{Candidature} from './Models/Candidature'
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceCandidatureService {
  urlApi = 'http://localhost:8087/test';  // URL de l'API

  constructor(private http: HttpClient ) {

  }

  addCandidature(candidature: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('candidature', candidature);
    formData.append('file', file);
  
    return this.http.post<any>('/addCV', formData);
  }
  
  getCandidature(){
    return this.http.get<any>("http://localhost:8087/test/findAllcandidates");

  }
  



  deleteCandidature(id: number) : Observable<Candidature[]>{
    return this.http.delete<[Candidature]>(this.urlApi+"/supp/"+id);
  }



  postCandidature(data : any){
    return this.http.post<any>("http://localhost:8087/test/newcandidates",data);

  }
 /* addExperience(experience:Experience): Observable<Experience>{
    return this.http.post<Experience>(`${this.urlApi+"/add"}`,experience);
  }*/

  updateCandidature(data:any,id:number){

    return this.http.put<any>("http://localhost:8087/test/updatecandidate/"+id,data)
    }
    /*updateCandidature(id:number, candidature: Candidature){


    return this.http.put(`${this.urlApi+"/updatecandidate/"+id}`,candidature);
   }*/

   getCandidatureById(id:Number){
     return this.http.get<Candidature>(this.urlApi+"/getByIdcandidate/"+id);
   }

   exportPdfCandidatures():Observable<Blob>{
    return this.http.get("http://localhost:8087/test/export/pdf", {responseType: 'blob' });
   }
    exportExcelCandidatures():Observable<Blob>{
    return this.http.get("http://localhost:8087/test/export/excel", {responseType: 'blob' });
}
getentretienById(idEntretien:number){

  return this.http.get<any>("http://localhost:8087/test/getByIdE/"+idEntretien);
  }
  assignCandidatureToEntretien(idCondidate: number, idEntretien: number): Observable<any> {
    const url = `http://localhost:8087/test/assign/${idCondidate}/${idEntretien}`;
    return this.http.put(url, {});
  }
  exportExcelExperiences():Observable<Blob>{
    return this.http.get("http://localhost:8087/test/Experience/export/excel", {responseType: 'blob' });
  }
  exportPdfExperiences():Observable<Blob>{
    return this.http.get("http://localhost:8087/test/Experience/export/pdf", {responseType: 'blob' });
   }
 
}
