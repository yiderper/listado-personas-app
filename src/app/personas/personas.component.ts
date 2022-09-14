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
    this.personas = this.personasService.personas;
  }

  agregar(){
    //Redirirnos a peronas/agregar
    this.router.navigate(['personas/agregar'])
  }
}
