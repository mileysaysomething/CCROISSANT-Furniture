import { Component, OnInit, OnDestroy } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase';
//import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'bs-navbar', //'app-bs-navbar' Removed 'app'-> not neccesary.
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
//implements OnDestroy
export class BsNavbarComponent {
  // Define Observable
  //user$: Observable< firebase.User  >;

  appUser: AppUser;

  //private afAuth: AngularFireAuth
  constructor(private auth: AuthService) {

    //observablle
    //afAuth.authState.subscribe((user => this.user=user));
    //this.user$ = afAuth.authState;
    
    auth.appUser$.subscribe((appUser => this.appUser = appUser));
   }

  
  logout(){
    //this.afAuth.auth.signOut();
    this.auth.logout();
  }
  

}
