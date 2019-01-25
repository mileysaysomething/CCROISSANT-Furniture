import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
//import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
var AuthGuard = /** @class */ (function () {
    // Inject AuthService => get auth state
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        //Observe boolean
        return this.auth.user$.map(function (user) {
            if (user)
                return true;
            _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        });
    };
    AuthGuard = tslib_1.__decorate([
        Injectable(
        /* {
         providedIn: 'root'
       }*/
        ),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=auth-guard.service.js.map