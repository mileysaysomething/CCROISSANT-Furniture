import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';
var AppComponent = /** @class */ (function () {
    //title = 'fshop';
    function AppComponent(userService, auth, router) {
        this.userService = userService;
        this.auth = auth;
        auth.user$.subscribe(function (user) {
            if (!user)
                return;
            if (user) {
                //Everytime user login save to db
                userService.save(user);
                var returnUrl = localStorage.getItem('returnUrl');
                if (!returnUrl)
                    return;
                localStorage.removeItem('returnUrl');
                router.navigateByUrl(returnUrl);
            }
        });
    }
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService, AuthService, Router])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map