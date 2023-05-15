import { Component } from '@angular/core';
import { Habilidad } from '../../model/habilidad.model';
import { HabilidadService } from '../../service/habilidad.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent {

  habi: Habilidad = null;

 constructor(private service: HabilidadService, private activartedRouter: ActivatedRoute, private router: Router){}
 
ngOnInit(): void{
  const id = this.activartedRouter.snapshot.params['id'];
  this.service.detail(id).subscribe(
    data =>{
      this.habi = data;
    }, err=>{
      alert("Error al Modificar")
      this.router.navigate(['']);
    }
  )
}

onUpdate(): void{
  const id = this.activartedRouter.snapshot.params['id'];
  this.service.update(id, this.habi).subscribe(
    data => {
      this.router.navigate(['']);
    }, err =>{
        alert("Error al Modificar")
        this.router.navigate(['']);
    }
  )
}

}
