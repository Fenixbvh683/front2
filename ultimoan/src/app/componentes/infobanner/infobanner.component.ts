
import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
import { persona } from '../model/persona,model';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-infobanner',
  templateUrl: './infobanner.component.html',
  styleUrls: ['./infobanner.component.css']
})
export class InfobannerComponent implements OnInit{

  miPorfolio:any;

  persona: persona = new persona("","","","","","","","","","");

  constructor(private datosPorfolio:PorfolioService, public personaService: PersonaService){}

  ngOnInit(): void {

    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
      this.personaService.getPersona().subscribe(data => {this.persona = data});
    })
  }

}
