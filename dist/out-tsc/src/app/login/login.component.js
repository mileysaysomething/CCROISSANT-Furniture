import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
//import * as firebase from 'firebase';
import { AuthService } from '../auth.service';
var LoginComponent = /** @class */ (function () {
    //private afAuth: AngularFireAuth
    function LoginComponent(afAuth) {
        this.afAuth = afAuth;
    }
    //Login With Google
    LoginComponent.prototype.login = function () {
        //this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
        this.afAuth.login();
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map