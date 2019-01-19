import { Component, OnInit, OnDestroy } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase';
//import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'bs-navbar', //'app-bs-navbar' Removed 'app'-> not neccesary.
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
//implements OnDestroy
export class BsNavbarComponent {
  // Define Observable
  //user$: Observable< firebase.User  >;

  //private afAuth: AngularFireAuth
  constructor(public auth: AuthService) {

    //observablle
    //afAuth.authState.subscribe((user => this.user=user));

    //this.user$ = afAuth.authState;
   }

  
  logout(){
    //this.afAuth.auth.signOut();
    this.auth.logout();
  }
  

}
