import { Component, OnInit } from '@angular/core';
import { Estudio } from '../../model/estudio.model';
import { EstudioService } from '../../service/estudio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-estudio',
  templateUrl: './edit-estudio.component.html',
  styleUrls: ['./edit-estudio.component.css']
})
export class EditEstudioComponent implements OnInit{
  estu: Estudio = null;

 constructor(private service: EstudioService, private activartedRouter: ActivatedRoute, private router: Router){}
 
ngOnInit(): void{
  const id = this.activartedRouter.snapshot.params['id'];
  this.service.detail(id).subscribe(
    data =>{
      this.estu = data;
    }, err=>{
      alert("Error al Modificar")
      this.router.navigate(['']);
    }
  )
}

onUpdate(): void{
  const id = this.activartedRouter.snapshot.params['id'];
  this.service.update(id, this.estu).subscribe(
    data => {
      this.router.navigate(['']);
    }, err =>{
        alert("Error al Modificar")
        this.router.navigate(['']);
    }
  )
}

}
