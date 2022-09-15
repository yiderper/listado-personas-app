import { Component, OnInit } from '@angular/core';
import * as  firebase from 'firebase' // Lo instalamos



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  
  ngOnInit(): void {
    //Inicializamos firebase
    firebase.initializeApp({
      apiKey:"AIzaSyCLo_5vwEAbl7ax0oMYqEjpCwkNbeAjbUk",
      //authDomain: "listado-personas-18a23-default-rtdb.firebaseio.com"
      authDomain: "listado-personas-18a23.firebaseapp.com",
    })
   
  }

}
