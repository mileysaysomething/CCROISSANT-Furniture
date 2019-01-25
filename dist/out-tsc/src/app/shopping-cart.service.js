import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { take } from 'rxjs/operators';
//import 'rxjs/add/operator/take';
var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(db) {
        this.db = db;
    }
    ShoppingCartService.prototype.create = function () {
        return this.db.list('/shopping-carts').push({
            createdDate: new Date().getTime()
        });
    };
    ShoppingCartService.prototype.getCart = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var cartId;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        return [2 /*return*/, this.db.object('/shopping-carts' + cartId)];
                }
            });
        });
    };
    ShoppingCartService.prototype.getItem = function (cartId, productId) {
        return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
    };
    ShoppingCartService.prototype.getOrCreateCartId = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var cartId, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cartId = localStorage.getItem('cartId');
                        if (!!cartId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.create()];
                    case 1:
                        result = _a.sent();
                        localStorage.setItem('cartId', result.key);
                        /*
                        this.create().then(result =>{
                          localStorage.setItem('cartId',result.key);}
                        */
                        return [2 /*return*/, result.key]; ///return this.getCart(result.key);
                    case 2: return [2 /*return*/, cartId]; //return this.getCart(cartId);
                }
            });
        });
    };
    ShoppingCartService.prototype.addToCart = function (product) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.updateItemQuantity(product, 1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.removeFromCart = function (product) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.updateItemQuantity(product, -1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.updateItemQuantity = function (product, change) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var cartId, item$;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        item$ = this.getItem(cartId, product.key);
                        item$.snapshotChanges().pipe(take(1)).subscribe(function (item) {
                            // If item.quanity not exist, won't show a number
                            // item.update({product:product, quantity:((i.payload.val().quantity) || 0) + 1});
                            if (item.payload.val()) {
                                item$.update({
                                    product: product, quantity: item.payload.val().quantity + change
                                });
                            }
                            else {
                                item$.set({ product: product, quantity: 1 });
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AngularFireDatabase])
    ], ShoppingCartService);
    return ShoppingCartService;
}());
export { ShoppingCartService };
//# sourceMappingURL=shopping-cart.service.js.map