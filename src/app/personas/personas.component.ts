import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../persona.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private loggingService:LoggingService,
              private personasService: PersonasService,
              private router:Router,
              private route: ActivatedRoute
  ){}
  /*
  // router:Router Es un servicio que permite redigirse a otra ruta
  ngOnInit(): void {
    /*Linea que utilizaba el arreglo
    this.personas = this.personasService.personas;
    

    //Llamaos el método obtener personas
    // y Devuelve un observable y nos subscribomos para que se ejecute el metodo
    this.personasService.obtenerPersonas()
        .subscribe(
          (personas: Persona[]) => {
            //Cargamos los datos de la base de datos al arreglo de personas local 
            this.personas = personas;
            this.personasService.setPersonas(this.personas);
            console.log("obtener personas suscriber:" + this.personas);
          }  
        );
  }

  */

  ngOnInit() :void {
    this.personasService.obtenerPersonas()
    .subscribe(
      (personas: Persona[]) => {
        //Cargamos los datos de la base de datos al arreglo de personas local 
        this.personas = personas;
        this.personasService.setPersonas(this.personas)
        console.log("obtener personas suscriber:" + this.personas);
      }
    );    
  }

  agregar(){
    //Redirirnos a peronas/agregar
    this.router.navigate(['personas/agregar'])
  }
}
