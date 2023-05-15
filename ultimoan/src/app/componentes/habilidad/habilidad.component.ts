import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
import { Habilidad } from '../model/habilidad.model';
import { HabilidadService } from '../service/habilidad.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit{

  habilidadList: any;
  miPorfolio: any;
  habi: Habilidad[] = [];

  constructor(private datosPorfolio:PorfolioService,
              public Service: HabilidadService){}

  ngOnInit(): void {

    this.cargarHabilidad();
        this.datosPorfolio.obtenerDatos().subscribe(data =>{
        console.log(data);
        this.habilidadList=data.habilidad;
        console.log
        this.miPorfolio=data;
     })
  }

  cargarHabilidad(): void{
    this.Service.lista().subscribe(data => {this.habi = data});
  }

  delete(idhab?: number){
    if(idhab != undefined){
      this.Service.delete(idhab).subscribe(
        data=>{
          this.cargarHabilidad();
        }, err => {
          alert("No se pudo Borrar la experiencia")
        }
      )
    }
  }

}
