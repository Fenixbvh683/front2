import { Component } from '@angular/core';
import { Habilidad } from '../../model/habilidad.model';
import { HabilidadService } from '../../service/habilidad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newhabilidad',
  templateUrl: './newhabilidad.component.html',
  styleUrls: ['./newhabilidad.component.css']
})
export class NewhabilidadComponent {

nombrehab: string = "";
porcentajehab: number = 0;
colorhab: string = "";

constructor(private sHabilidad: HabilidadService, private router: Router){}

ngOnInit(): void {  }

  onCreate(): void{
    const hab = new Habilidad(this.nombrehab, this.porcentajehab, this.colorhab);
    this.sHabilidad.save(hab).subscribe(data =>{
      alert("Estudio Añadido");
      this.router.navigate([]);
    }, err =>{
      alert("Fallo");
      this.router.navigate([]);
    }
    )
  }
}
