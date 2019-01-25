import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase';
//import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ShoppingCartService } from '../shopping-cart.service';
var BsNavbarComponent = /** @class */ (function () {
    //private afAuth: AngularFireAuth
    //Canno await in a construcotr
    function BsNavbarComponent(auth, shoppingCartService) {
        this.auth = auth;
        this.shoppingCartService = shoppingCartService;
        //observablle
        //afAuth.authState.subscribe((user => this.user=user));
        //this.user$ = afAuth.authState;
    }
    BsNavbarComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var cart$;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.auth.appUser$.subscribe((function (appUser) { return _this.appUser = appUser; }));
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        cart$ = _a.sent();
                        cart$.snapshotChanges().subscribe(function (cart) {
                            _this.shoppingCartItemCount = 0;
                            for (var productId in cart.payload.val().items) {
                                _this.shoppingCartItemCount += cart.payload.val().items[productId].quantity;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    BsNavbarComponent.prototype.logout = function () {
        //this.afAuth.auth.signOut();
        this.auth.logout();
    };
    BsNavbarComponent = tslib_1.__decorate([
        Component({
            selector: 'bs-navbar',
            templateUrl: './bs-navbar.component.html',
            styleUrls: ['./bs-navbar.component.css']
        })
        //implements OnDestroy
        ,
        tslib_1.__metadata("design:paramtypes", [AuthService, ShoppingCartService])
    ], BsNavbarComponent);
    return BsNavbarComponent;
}());
export { BsNavbarComponent };
//# sourceMappingURL=bs-navbar.component.js.map