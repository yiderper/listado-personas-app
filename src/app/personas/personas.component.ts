import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(
      private loggingService:LoggingService,
      private personasService: PersonasService,
      private router:Router   ){ }
       // router:Router Es un servicio que permite redigirse a otra ruta

  ngOnInit(): void {
    /*Linea que utilizaba el arreglo
    this.personas = this.personasService.personas;
    */

    //Llamaos el método obtener personas
    // y Devuelve un observable y nos subscribomos para que se ejecute el metodo
    this.personasService.obtenerPersonas()
    .subscribe(
      (personas: Persona[]) => {
        this.personas = personas;
        this.personasService.setPersonas(personas);
      }
    );

  }

  agregar(){
    //Redirirnos a peronas/agregar
    this.router.navigate(['personas/agregar'])
  }
}
