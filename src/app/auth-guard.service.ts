import { Injectable } from '@angular/core';
//import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
//import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { Statement } from '@angular/compiler';

@Injectable(
 /* {
  providedIn: 'root'
}*/
) 
export class AuthGuard  implements CanActivate{

  // Inject AuthService => get auth state
  constructor(private auth:AuthService, private router:Router) { }

  canActivate(route, state: RouterStateSnapshot){
    //Observe boolean
    return this.auth.user$.map(user => {
      if (user) return true; 

      this.router.navigate(['/login'], {queryParams:{returnUrl: state.url}});  
      return false;
    });
  } 
}
