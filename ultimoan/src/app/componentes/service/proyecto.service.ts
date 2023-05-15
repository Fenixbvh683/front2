import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proURL = 'http://localhost:8080/proyecto/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.proURL + 'lista')
  }

  public detail(idpro: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.proURL + `detail/${idpro}`);
  }

  public save(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.proURL + 'create', proyecto);
   }

   public update(idpro: number, proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.proURL + `update/${idpro}`, proyecto)
   }

   public delete(idpro: number): Observable<any>{
    return this.httpClient.delete<any>(this.proURL + `delete/${idpro}`);
   }

}
