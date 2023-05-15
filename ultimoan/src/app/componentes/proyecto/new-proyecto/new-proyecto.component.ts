import { Component } from '@angular/core';
import { ProyectoService } from '../../service/proyecto.service';
import { Router } from '@angular/router';
import { Proyecto } from '../../model/proyecto.model';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent {
  nombrepro: string = "";
  descripcionpro: string = "";
  imgpro: string = "";
  
  constructor(private sProyecto: ProyectoService, private router: Router){}
  
  ngOnInit(): void {  }
  
    onCreate(): void{
      const pro = new Proyecto(this.nombrepro, this.descripcionpro, this.imgpro);
      this.sProyecto.save(pro).subscribe(data =>{
        alert("Estudio Añadido");
        this.router.navigate([]);
      }, err =>{
        alert("Fallo");
        this.router.navigate([]);
      }
      )
    }
}
