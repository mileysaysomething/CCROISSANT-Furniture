import { Injectable } from '@angular/core';
import { CanActivate,RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree} from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/operator/map';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppUser } from './models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth:AuthService, private userService:UserService) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree{
    /*
      return this.auth.user$.pipe(
        switchMap(user => this.userService.get(user.uid)),
        map((appUser: AppUser) => appUser.isAdmin)  
      )
       */
      return this.auth.appUser$
        .map(appUser => appUser.isAdmin);
  }
}
