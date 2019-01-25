import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductService } from './../product.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';
var ProductsComponent = /** @class */ (function () {
    // Construcor in TypeScript cannot be async
    function ProductsComponent(route, productService, shoppingCartService) {
        var _this = this;
        this.shoppingCartService = shoppingCartService;
        this.products = [];
        this.filteredProducts = [];
        productService
            .getAll()
            .switchMap(function (products) {
            _this.products = products;
            return route.queryParamMap;
        }).subscribe(function (params) {
            _this.category = params.get('category');
            //If no category selected, return all products
            _this.filteredProducts = (_this.category) ?
                _this.products.filter(function (p) { return p.category === _this.category; }) :
                _this.products;
        });
    }
    ProductsComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.subscription = (_b.sent()).snapshotChanges()
                            .subscribe(function (cart) { return _this.cart = cart.payload.val(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProductsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            ProductService,
            ShoppingCartService])
    ], ProductsComponent);
    return ProductsComponent;
}());
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map