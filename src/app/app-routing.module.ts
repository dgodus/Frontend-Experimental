import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';
import { DefaultComponent } from './default/default.component';
import { NomNewComponent } from './nom-new/nom-new.component';
import { NomEditComponent } from './nom-edit/nom-edit.component';
import { NomDetailComponent } from './nom-detail/nom-detail.component';
import { PersonNewComponent} from './person-new/person-new.component';
import { VistaPersonaComponent } from './vista-persona/vista-persona.component';
import { AlumnoNewComponent} from './alumno-new/alumno-new.component';
//import { HojaNewComponent} from './hoja-new/hoja-new.component';
import { UniversidadNewComponent} from './universidad-new/universidad-new.component';
import { HojavidaNewComponent } from './hojavida-new/hojavida-new.component';
import { FichaegresoNewComponent } from './fichaegreso-new/fichaegreso-new.component';
import { PanelControlComponent } from './panel-control/panel-control.component';

//import { ExperiencialaboralNewComponent } from './experiencialaboral-new/experiencialaboral-new.component'



const routes: Routes = [
    {path:'', component: DefaultComponent},  //inicio
    {path:'Inicio', component: DefaultComponent},  //
    {path: 'login', component: LoginComponent},  //
    {path: 'logout/:sure', component: LoginComponent },  //
    {path: 'registro', component: RegisterComponent},  //
    {path: 'crear-nombre',component:NomNewComponent},  ///
    {path: 'editar-nombre/:id', component:NomEditComponent},  //
    {path: 'nombre/:id',component:NomDetailComponent},      // detalle curso
    {path: 'crear-persona',component:PersonNewComponent},  // crear datos personales
    {path: 'vista-persona', component: VistaPersonaComponent }, // visualizar datos de persona que se registro
    {path: 'datos-alumno', component: AlumnoNewComponent},   // Alumno datos crear
   // {path: 'hoja-vida', component: HojaNewComponent},   // Hoja de vida crear
    {path: 'universidad', component: UniversidadNewComponent},   // Universidad de vida crear
    {path: 'hoja-vida' , component: HojavidaNewComponent }, // creacion de hoja de vida
    {path: 'ficha-egresado', component: FichaegresoNewComponent }, //creacion de ficha egresado
    {path: 'panel-control', component:PanelControlComponent},

    //{path: 'Experiencia-laboral', component: ExperiencialaboralNewComponent  }, // Experiencia Laboral crear

    {path: '**', component: DefaultComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingProviders: any[] = [];
//export const routing:  ModuleWitthProviders = RouterModule.forRoot(appRoutes);
