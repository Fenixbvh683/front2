import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
import { Estudio } from '../model/estudio.model';
import { EstudioService } from '../service/estudio.service';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit{

estudioList:any;
miPorfolio:any;
est: Estudio[] = []

constructor(private datosPorfolio:PorfolioService, 
            public Service: EstudioService){}

ngOnInit(): void {
  this.cargarEstudio();
  this.datosPorfolio.obtenerDatos().subscribe(data =>{
    console.log(data);
    this.estudioList=data.estudios;
    console.log(data);
    this.miPorfolio=data;
    
  })
}

cargarEstudio(): void{
  this.Service.lista().subscribe(data => {this.est = data;})
}

delete(idestu?: number){
  if(idestu != undefined){
    this.Service.delete(idestu).subscribe(
      data=>{
        this.cargarEstudio();
      }, err => {
        alert("No se pudo Borrar la experiencia")
      }
    )
  }
}

}
