import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
import { Navbar } from '../model/navbar.model';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  miPorfolio:any;
  nav: Navbar[] = [];

  constructor(private datosPorfolio:PorfolioService,
              public Service: NavbarService){ }

  ngOnInit(): void {

    this.cargarNavbar();
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
    console.log(data);
    this.miPorfolio=data;
    
    })
  }

  cargarNavbar(): void{
    this.Service.lista().subscribe(data => {this.nav = data});
  }

}
