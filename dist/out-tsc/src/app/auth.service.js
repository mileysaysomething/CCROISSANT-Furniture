import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
//import { switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
var AuthService = /** @class */ (function () {
    function AuthService(afAuth, route, userService) {
        this.afAuth = afAuth;
        this.route = route;
        this.userService = userService;
        this.user$ = afAuth.authState;
    }
    AuthService.prototype.login = function () {
        // Direct to Home after Login
        var returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        // Store to localDB
        localStorage.setItem('returnUrl', returnUrl);
        // Only unit test component not the service
        this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    Object.defineProperty(AuthService.prototype, "appUser$", {
        get: function () {
            var _this = this;
            return this.user$
                .switchMap(function (user) {
                if (user)
                    return _this.userService.get(user.uid);
                return Observable.of(null);
            });
        },
        enumerable: true,
        configurable: true
    });
    AuthService = tslib_1.__decorate([
        Injectable(
        /* {
        providedIn: 'root'
      }*/
        ),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth,
            ActivatedRoute,
            UserService])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map