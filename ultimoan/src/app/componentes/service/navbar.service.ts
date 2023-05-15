import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Navbar } from '../model/navbar.model';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  navURL = 'http://localhost:8080/navbar/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Navbar[]>{
    return this.httpClient.get<Navbar[]>(this.navURL + 'lista')
  }

  public detail(idnav: number): Observable<Navbar>{
    return this.httpClient.get<Navbar>(this.navURL + `detail/${idnav}`);
  }

  public save(navbar: Navbar): Observable<any>{
    return this.httpClient.post<any>(this.navURL + 'create', navbar);
   }

   public update(idnav: number, navbar: Navbar): Observable<any>{
    return this.httpClient.put<any>(this.navURL + `update/${idnav}`, navbar)
   }

   public delete(idnav: number): Observable<any>{
    return this.httpClient.delete<any>(this.navURL + `delete/${idnav}`);
   }

}
