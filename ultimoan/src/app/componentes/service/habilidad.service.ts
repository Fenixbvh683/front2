import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  habURL = 'http://localhost:8080/habilidad/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.habURL + 'lista');
  }

  public detail(idhab: number): Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.habURL + `detail/${idhab}`);
  }

  public save(habilidad: Habilidad): Observable<any>{
    return this.httpClient.post<any>(this.habURL + 'create', habilidad);
   }

   public update(idhab: number, habilidad: Habilidad): Observable<any>{
    return this.httpClient.put<any>(this.habURL + `update/${idhab}`, habilidad)
   }

   public delete(idhab: number): Observable<any>{
    return this.httpClient.delete<any>(this.habURL + `delete/${idhab}`);
   }

}
