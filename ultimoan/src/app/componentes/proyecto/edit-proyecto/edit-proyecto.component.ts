import { Component } from '@angular/core';
import { Proyecto } from '../../model/proyecto.model';
import { ProyectoService } from '../../service/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent {
  proye: Proyecto = null;

 constructor(private service: ProyectoService, private activartedRouter: ActivatedRoute, private router: Router){}
 
ngOnInit(): void{
  const id = this.activartedRouter.snapshot.params['id'];
  this.service.detail(id).subscribe(
    data =>{
      this.proye = data;
    }, err=>{
      alert("Error al Modificar")
      this.router.navigate(['']);
    }
  )
}

onUpdate(): void{
  const id = this.activartedRouter.snapshot.params['id'];
  this.service.update(id, this.proye).subscribe(
    data => {
      this.router.navigate(['']);
    }, err =>{
        alert("Error al Modificar")
        this.router.navigate(['']);
    }
  )
}

}
