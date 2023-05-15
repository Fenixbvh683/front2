import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sobremi } from '../model/sobremi.model';

@Injectable({
  providedIn: 'root'
})
export class SobremiService {

  URL = 'http://localhost:8080/sobremi/';
  
  constructor(private http: HttpClient) { }

  public getSobremi(): Observable<sobremi>{
    return this.http.get<sobremi>(this.URL + 'traer/perfil')
  }

}
