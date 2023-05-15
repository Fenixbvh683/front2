import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
import { Proyecto } from '../model/proyecto.model';
import { ProyectoService } from '../service/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit{

  proyectoList:any
  miPorfolio:any
  proy: Proyecto[] = [];

  constructor(private datosPorfolio:PorfolioService,
              public Service: ProyectoService){}

  ngOnInit(): void {
    this.cargarProyecto();
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.proyectoList=data.proyecto;
      console.log(data);
      this.miPorfolio=data;
      
    })
  }

  cargarProyecto(): void{
    this.Service.lista().subscribe(data => {this.proy = data});
  }

  delete(idpro?: number){
    if(idpro != undefined){
      this.Service.delete(idpro).subscribe(
        data=>{
          this.cargarProyecto();
        }, err => {
          alert("No se pudo Borrar la experiencia")
        }
      )
    }
  }

}
