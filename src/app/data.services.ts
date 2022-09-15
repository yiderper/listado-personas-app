import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Persona } from './persona.model';
import { PersonasService } from './persona.service';
import { Observable } from 'rxjs/internal/Observable';


@Injectable() // Porque vamos a utilizar otros servicios
export class DataServices{

    constructor(private httpClient: HttpClient){}

    //Método Para recuperar información
    cargarPersonas(){
        return this.httpClient.get<Persona[]>('https://listado-personas-18a23-default-rtdb.firebaseio.com/datos.json');
    }


    //Método Guardar Personas
    guardarPersonas(personas: Persona[]){

        //Url de la base de datos
        this.httpClient.put('https://listado-personas-18a23-default-rtdb.firebaseio.com/datos.json',personas)
            .subscribe(
                response => console.log("Resultado guardar Personas: "+response),
                error => console.log("Error al guardar Personas :" + error)            
        );
    }

    // Pasamos el indice de los datos que queremos modificar
    // y los datos que queremos modificar
    modificarPersona(index: number, persona:Persona){
        let url: string;
        url = 'https://listado-personas-18a23-default-rtdb.firebaseio.com/datos/' + index +'.json';
        this.httpClient.put(url, persona)
            .subscribe(
                response => console.log("resultado de modificar Persona: " + response),             
                error => console.log("Error en modificar Persona:" + error)               
        )    
    }

    eliminarPersona(index:number){
        let url: string;
        url = 'https://listado-personas-18a23-default-rtdb.firebaseio.com/datos/' + index +'.json';
        this.httpClient.delete(url)
            .subscribe(
                response => console.log("resultado de eliminar Persona: " + response),             
                error => console.log("Error en modificar Persona:" + error)               
        )    

    }
}