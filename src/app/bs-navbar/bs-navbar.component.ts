import { Component, OnInit, OnDestroy } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase';
//import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { map, subscribeOn } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar', //'app-bs-navbar' Removed 'app'-> not neccesary.
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
//implements OnDestroy
export class BsNavbarComponent implements OnInit {
  // Define Observable
  //user$: Observable< firebase.User  >;

  appUser: AppUser;
  cart$:Observable<ShoppingCart>;
  //private afAuth: AngularFireAuth
  //Canno await in a construcotr
  constructor(private auth: AuthService, private shoppingCartService:ShoppingCartService) {
    //observablle
    //afAuth.authState.subscribe((user => this.user=user));
    //this.user$ = afAuth.authState;
   }
   
   async ngOnInit(){
    this.auth.appUser$.subscribe((appUser => this.appUser = appUser));
    this.cart$ = await this.shoppingCartService.getCart();
     
  }
  
  logout(){
    //this.afAuth.auth.signOut();
    this.auth.logout();
  }
  
  

}
