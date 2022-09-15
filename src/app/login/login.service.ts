import { Injectable } from "@angular/core";
import { Route, Router } from "@angular/router";
import * as firebase from 'firebase';


@Injectable()
export class LoginService{

    token: string;

    constructor(private router : Router){}


    login(email: string, password:string){
        firebase.auth().signInWithemailAndPassword(email, password) // Devuelve una promesa
            .then( response => {
                firebase.auth().currentuser.getIdToken().then(
                    token => {
                        this.token = token;
                    }
                )
            })
            this.router.navigate(['/']); // Pagina Incial, listado de personas
    }

}