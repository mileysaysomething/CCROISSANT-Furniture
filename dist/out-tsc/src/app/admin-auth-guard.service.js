import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
var AdminAuthGuard = /** @class */ (function () {
    function AdminAuthGuard(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    AdminAuthGuard.prototype.canActivate = function (route, state) {
        /*
          return this.auth.user$.pipe(
            switchMap(user => this.userService.get(user.uid)),
            map((appUser: AppUser) => appUser.isAdmin)
          )
           */
        return this.auth.appUser$
            .map(function (appUser) { return appUser.isAdmin; });
    };
    AdminAuthGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, UserService])
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());
export { AdminAuthGuard };
//# sourceMappingURL=admin-auth-guard.service.js.map