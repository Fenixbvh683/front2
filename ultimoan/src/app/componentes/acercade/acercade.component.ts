import { Component,OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
import { sobremi } from '../model/sobremi.model';
import { SobremiService } from '../service/sobremi.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit{

miPorfolio:any
sobremi: sobremi = new sobremi("")

constructor(private datosPorfolio:PorfolioService, 
            public sobremiService: SobremiService){}

ngOnInit(): void {
  
  this.datosPorfolio.obtenerDatos().subscribe(data =>{
    console.log(data);
    this.miPorfolio=data;
    this.sobremiService.getSobremi().subscribe(data => {this.sobremi = data});

  })
}

}
