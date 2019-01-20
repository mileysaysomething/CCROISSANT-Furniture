import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { AppUser } from './models/app-user';
/* AngularFireDatabase no longer returns a FirebaseObjectObservable<any>.  
Instead it returns AngularFireObject<{}> */
//import { FirebaseObjectObservable } from '@angular/fire/database-deprecated';
import { AngularFireObject } from 'angularfire2/database';


@Injectable()

export class UserService {

  constructor(private db:AngularFireDatabase) { }

  save(user: firebase.User){
    this.db.object('/users/' + user.uid).update({
      name: user.displayName, // Same as the one in NavBar
      email: user.email,  
    });
  }

  get(uid: string){
    return this.db.object('/users/' + uid).valueChanges(); 
  }
}
 