import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { DataServices } from './data.services';
import { Observable } from 'rxjs';

@Injectable()
export class PersonasService {
  personas: Persona[] = [ /*
    //Ya no se va a cargar la infor desde aca
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),*/
  ]; 

  constructor(
          private loggingService:LoggingService,
          private dataServices : DataServices){}

  saludar = new EventEmitter<number>();



  //Se encarga de actualizar el arrega una vez
  // Se haya recuperado de la BD
  setPersonas(personas: Persona[]){
    this.personas = personas;
  }  


  // Recuperar desde la base de datos          
  obtenerPersonas(): Observable<Persona[]> {
    //Retorna un observable; vamos al componente persona
    //donde se utiliza estos datos
    return this.dataServices.cargarPersonas();
  }        

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola('agregamos persona:' + persona.toString())
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
    this.dataServices.modificarPersona(indice,persona);
  }

  eliminarPersona(index: number){
    this.personas.splice(index,1);
    //eliminar en la base de datos
    this.dataServices.eliminarPersona(index)
    // Mandoamos a cargar nuevamen toda el registro a la base
    this.modificarPersonas();
  }

  modificarPersonas(){
    if(this.personas != null){
      //Guarda todas las personas nuevamente para regenerar indicess
      this.dataServices.guardarPersonas(this.personas);
    }
  }
  
}
