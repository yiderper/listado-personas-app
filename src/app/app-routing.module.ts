import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { Persona } from './persona.model';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';

// 1. Definimos variables de routas
/* FORMA 1 DE DEFINIR RUTAS
const routes: Routes = [
  //Ruta Principal
  // localhost:4200 : se muestra el componente personas componente 
  { path: '', component: PersonasComponent},

  //hocalhost:4200/personas
  { path: 'personas', component: PersonasComponent},

  //hocalhost:4200/personas/agregar
  { path: 'personas/agregar', component: FormularioComponent},

  //hocalhost:4200/personas/id: Editar Persona
  { path: 'personas/:id', component: FormularioComponent}
]
// 2. Vamos a app.component y definimos el routing para cada una de las rutas
*/


//FORMA 2 CON RUTAS CHILDREN
const routes : Routes = [
  { path : '', component: PersonasComponent },
  { path : 'personas', component: PersonasComponent, children: [
    { path: 'agregar', component: FormularioComponent},
    { path: ':id', component: FormularioComponent }
    ]},
  // Siempre de ultimo se define la ruta en caso de que se define una ruta qu
  // que no exista  
  // Y creamos el componente ErrorComponent
  { path: '**', component: ErrorComponent}
];


@NgModule({
  //Quitamos las declaraciones y dejamo solo los import

  imports: [
    RouterModule.forRoot(
      routes
    )    
  ],
  //Exportamos el Modulo
  exports: [RouterModule]
})

//Agregamos "AppRoutingModule" en import de "app.module"
export class AppRoutingModule { }
