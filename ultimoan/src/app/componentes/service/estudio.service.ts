import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../model/estudio.model';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  estURL = 'http://localhost:8080/estudio';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Estudio[]>{
    return this.httpClient.get<Estudio[]>(this.estURL + 'lista')
  }

  public detail(idest: number): Observable<Estudio>{
    return this.httpClient.get<Estudio>(this.estURL + `detail/${idest}`);
  }

  public save(estudio: Estudio): Observable<any>{
    return this.httpClient.post<any>(this.estURL + 'create', estudio);
   }

   public update(idest: number, estudio: Estudio): Observable<any>{
    return this.httpClient.put<any>(this.estURL + `update/${idest}`, estudio)
   }

   public delete(idest: number): Observable<any>{
    return this.httpClient.delete<any>(this.estURL + `delete/${idest}`);
   }
}
