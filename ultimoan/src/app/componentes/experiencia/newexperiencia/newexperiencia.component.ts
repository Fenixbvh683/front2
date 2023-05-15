import { Component } from '@angular/core';
import { ExperienciaService } from '../../service/experiencia.service';
import { Router } from '@angular/router';
import { Experiencia } from '../../model/experiencia.model';

@Component({
  selector: 'app-newexperiencia',
  templateUrl: './newexperiencia.component.html',
  styleUrls: ['./newexperiencia.component.css']
})
export class NewexperienciaComponent {
nombreexp: string = "";
descripcionexp: string = "";
ciudadexp: string = "";
imgexp: string = "";

constructor(private service: ExperienciaService, private router: Router){

}
ngOninit(): void{}

onCreate(): void{
  const expe = new Experiencia(this.nombreexp, this.descripcionexp, this.ciudadexp, this.imgexp)
  this.service.save(expe).subscribe(data =>{
    alert("Experiencia añadida");
    this.router.navigate(['']);
  }, err =>{
    alert("Fallo");
    this.router.navigate([]);
  }
  )
}

}
