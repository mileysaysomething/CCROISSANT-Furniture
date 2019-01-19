import { Component, OnInit } from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
//private afAuth: AngularFireAuth
  constructor(private afAuth: AuthService) {
    
   }

  //Login With Google
  login(){
    //this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.afAuth.login();
  }
}
