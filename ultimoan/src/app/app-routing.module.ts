import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './componentes/error404/error404.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NewexperienciaComponent } from './componentes/experiencia/newexperiencia/newexperiencia.component';
import { NewEstudioComponent } from './componentes/estudio/new-estudio/new-estudio.component';
import { NewhabilidadComponent } from './componentes/habilidad/newhabilidad/newhabilidad.component';
import { NewProyectoComponent } from './componentes/proyecto/new-proyecto/new-proyecto.component';
import { EditEstudioComponent } from './componentes/estudio/edit-estudio/edit-estudio.component';
import { EditMiComponent } from './componentes/acercade/edit-mi/edit-mi.component';
import { EditFooterComponent } from './componentes/footer/edit-footer/edit-footer.component';
import { EditHabilidadComponent } from './componentes/habilidad/edit-habilidad/edit-habilidad.component';
import { EditInfoComponent } from './componentes/infobanner/edit-info/edit-info.component';
import { EditnavbarComponent } from './componentes/navbar/editnavbar/editnavbar.component';
import { EditProyectoComponent } from './componentes/proyecto/edit-proyecto/edit-proyecto.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';


const routes: Routes = [
    {path: '', component:InicioComponent},
    {path: 'nuevaexp', component: NewexperienciaComponent},
    {path: 'nuevoest', component: NewEstudioComponent},
    {path: 'nuevahab', component: NewhabilidadComponent},
    {path: 'nuevopro', component: NewProyectoComponent},
    {path: 'editmi/:id', component: EditMiComponent},
    {path: 'editestu/:id', component: EditEstudioComponent},
    {path: 'editfoo/:id', component: EditFooterComponent},
    {path: 'edithabi/:id', component: EditHabilidadComponent},
    {path: 'editinfo/:id', component: EditInfoComponent},
    {path: 'editnav/:id', component: EditnavbarComponent},
    {path: 'editpro/:id', component: EditProyectoComponent},
    {path: 'editexp/:id', component: EditExperienciaComponent},
    {path: '**', component: Error404Component}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
