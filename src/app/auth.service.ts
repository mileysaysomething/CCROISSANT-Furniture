import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable(
  /* {
  providedIn: 'root'
}*/
)
export class AuthService {
  //define observable
  user$:Observable<firebase.User>;

  constructor(private afAuth:AngularFireAuth, private route:ActivatedRoute ) { 
    this.user$ = afAuth.authState;
  }

  login(){
    // Direct to Home after Login
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')||'/';
    // Store to localDB
    localStorage.setItem('returnUrl', returnUrl);
    // Only unit test component not the service
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
     this.afAuth.auth.signOut();  
  }
  
}
