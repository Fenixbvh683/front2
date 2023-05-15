import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  expURL = 'http://localhost:8080/explab/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expURL + 'lista');
  }

  public detail(idexp: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${idexp}`);
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.expURL +  'create', experiencia);
   }

   public update(idexp: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${idexp}`, experiencia)
   }

   public delete(idexp: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${idexp}`);
   }
 
}
