import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { DataServices } from './data.services';

@Injectable()
export class PersonasService {
  personas: Persona[] = [ /*
    //Ya no se va a cargar la infor desde aca
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),*/
  ]; 

  saludar = new EventEmitter<number>();

  constructor(
          private loggingService:LoggingService,
          private dataServices : DataServices){}


  //Se encarga de actualizar el arrega una vez
  // Se haya recuperado de la BD
  setPersonas(personas: Persona[]){
    this.personas = personas;
  }  


  // Recuperar desde la base de datos          
  obtenerPersonas(){
    //Retorna un observable; vamos al componente persona
    //donde se utiliza estos datos
    return this.dataServices.cargarPersonas();

  }        

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola('agregamos persona:' + persona.nombre)
    if(this.personas == null){
      this.personas = []
    }    
    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas);

  }

  encontrarPersona(index: number){
      let persona: Persona = this.personas[index];
      return persona;
  }

  modificarPersona(indice:number, persona:Persona){
    //Obtenemos la referencia al objeto persona
    let persona1 = this.personas[indice];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido
  }

  eliminarPersona(index: number){
    this.personas.splice(index,1);
  }
  
}
