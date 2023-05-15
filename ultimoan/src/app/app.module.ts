import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { InfobannerComponent } from './componentes/infobanner/infobanner.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { EstudioComponent } from './componentes/estudio/estudio.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadComponent } from './componentes/habilidad/habilidad.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { Error404Component } from './componentes/error404/error404.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PorfolioService } from './componentes/servicios/porfolio.service';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewexperienciaComponent } from './componentes/experiencia/newexperiencia/newexperiencia.component';
import { NewEstudioComponent } from './componentes/estudio/new-estudio/new-estudio.component';
import { NewhabilidadComponent } from './componentes/habilidad/newhabilidad/newhabilidad.component';
import { NewProyectoComponent } from './componentes/proyecto/new-proyecto/new-proyecto.component';
import { EditEstudioComponent } from './componentes/estudio/edit-estudio/edit-estudio.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { EditHabilidadComponent } from './componentes/habilidad/edit-habilidad/edit-habilidad.component';
import { EditProyectoComponent } from './componentes/proyecto/edit-proyecto/edit-proyecto.component';
import { EditnavbarComponent } from './componentes/navbar/editnavbar/editnavbar.component';
import { EditInfoComponent } from './componentes/infobanner/edit-info/edit-info.component';
import { EditFooterComponent } from './componentes/footer/edit-footer/edit-footer.component';
import { EditMiComponent } from './componentes/acercade/edit-mi/edit-mi.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    InfobannerComponent,
    AcercadeComponent,
    EstudioComponent,
    ExperienciaComponent,
    HabilidadComponent,
    ProyectoComponent,
    FooterComponent,
    Error404Component,
    InicioComponent,
    NewexperienciaComponent,
    NewEstudioComponent,
    NewhabilidadComponent,
    NewProyectoComponent,
    EditEstudioComponent,
    EditExperienciaComponent,
    EditHabilidadComponent,
    EditProyectoComponent,
    EditnavbarComponent,
    EditInfoComponent,
    EditFooterComponent,
    EditMiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
  
  ],
  providers: [PorfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
