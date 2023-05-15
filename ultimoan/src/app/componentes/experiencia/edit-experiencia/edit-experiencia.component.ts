import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../../service/experiencia.service';
import { Experiencia } from '../../model/experiencia.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit{
 
  expelab: Experiencia = null;

 constructor(private service: ExperienciaService, private activartedRouter: ActivatedRoute, private router: Router){}
 
ngOnInit(): void{
  const id = this.activartedRouter.snapshot.params['id'];
  this.service.detail(id).subscribe(
    data =>{
      this.expelab = data;
    }, err=>{
      alert("Error al Modificar")
      this.router.navigate(['']);
    }
  )
}

onUpdate(): void{
  const id = this.activartedRouter.snapshot.params['id'];
  this.service.update(id, this.expelab).subscribe(
    data => {
      this.router.navigate(['']);
    }, err =>{
        alert("Error al Modificar")
        this.router.navigate(['']);
    }
  )
}


}

