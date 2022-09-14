import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit  {
  nombreInput:string;
  apellidoInput:string;  
  index : number; // Indice seleccionado
  modoEdicion : number; // Para recupara el queryParams que viene de persona.html

  constructor(private loggingService:LoggingService,
              private personaService:PersonasService,
              private router: Router,
              private route: ActivatedRoute
              ) {
                this.personaService.saludar.subscribe(
                  (indice: number) => alert("El Indice es: "+ indice)
                );
              }

  ngOnInit(){
    //Recuperamos el id seleccionado
    this.index = this.route.snapshot.params['id']

    // Recuperamos el parametro
    // +: convierte el string a number
    this.modoEdicion = + this.route.snapshot.queryParams['modoEdicion'];

    if(this.modoEdicion != null && this.modoEdicion === 1 ) { // Si es diferente de nulo estamos en modo edicion
      // Recuperamos el objeto
      let persona: Persona= this.personaService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }  
  }

   onGuardarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if(this.modoEdicion != null && this.modoEdicion === 1 ){ //Si existe estamos en modo edicion
      this.personaService.modificarPersona(this.index, persona1);
    }else{//Si no existe estamos agregando una nueva persona
      this.personaService.agregarPersona(persona1);
    }
    //Nos devuelve al componente personas
    this.router.navigate(['personas'])
  }

  eliminarPersona(){
    if( this.index != null ) {
      this.personaService.eliminarPersona(this.index);
    }
    //Volvermos al componente persona
    this.router.navigate(['personas']);
  }

}
