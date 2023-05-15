import { Component, OnInit } from '@angular/core';
import { EstudioService } from '../../service/estudio.service';
import { Router } from '@angular/router';
import { Estudio } from '../../model/estudio.model';

@Component({
  selector: 'app-new-estudio',
  templateUrl: './new-estudio.component.html',
  styleUrls: ['./new-estudio.component.css']
})
export class NewEstudioComponent implements OnInit{
nombreest: string = "";
descripcionest: string = "";
ciudadest: string = "";
imgest: string = "";

constructor(private sEstudio: EstudioService, private router: Router){}
  ngOnInit(): void {  }

  onCreate(): void{
    const est = new Estudio(this.nombreest, this.descripcionest, this.ciudadest, this.imgest);
    this.sEstudio.save(est).subscribe(data =>{
      alert("Estudio Añadido");
      this.router.navigate([]);
    }, err =>{
      alert("Fallo");
      this.router.navigate([]);
    }
    )
  }
}
