import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
import { ExperienciaService } from '../service/experiencia.service';
import { Experiencia } from '../model/experiencia.model';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{

  experienciaList: any
  miPorfolio: any
  expe: Experiencia[] = [];

  constructor(private datosPorfolio:PorfolioService,
              private service: ExperienciaService){}

  ngOnInit(): void {
    
    this.cargarExperiencia();

    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.experienciaList=data.trabajo;
      console.log(data);
      this.miPorfolio=data;
      
    })
    
  }
  
  cargarExperiencia(): void{
    this.service.lista().subscribe(data => {this.expe = data});
  }
  
  delete(idexp?: number){
    if(idexp != undefined){
      this.service.delete(idexp).subscribe(
        data=>{
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo Borrar la experiencia")
        }
      )
    }
  }
}
