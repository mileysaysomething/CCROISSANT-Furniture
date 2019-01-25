import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
        this.showActions = true;
    }
    ProductCardComponent.prototype.addToCart = function () {
        this.shoppingCartService.addToCart(this.product);
    };
    ProductCardComponent.prototype.removeFromCart = function () {
        this.shoppingCartService.removeFromCart(this.product);
    };
    ProductCardComponent.prototype.getQuantity = function () {
        if (!this.shoppingCart)
            return 222;
        if (this.shoppingCart) {
            var item = this.shoppingCart[0][this.product.key];
            return item ? item.payload.val().quantity : 0;
        }
    };
    tslib_1.__decorate([
        Input('product'),
        tslib_1.__metadata("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    tslib_1.__decorate([
        Input('show-actions'),
        tslib_1.__metadata("design:type", Object)
    ], ProductCardComponent.prototype, "showActions", void 0);
    tslib_1.__decorate([
        Input('shopping-cart'),
        tslib_1.__metadata("design:type", Object)
    ], ProductCardComponent.prototype, "shoppingCart", void 0);
    ProductCardComponent = tslib_1.__decorate([
        Component({
            selector: 'product-card',
            templateUrl: './product-card.component.html',
            styleUrls: ['./product-card.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ShoppingCartService])
    ], ProductCardComponent);
    return ProductCardComponent;
}());
export { ProductCardComponent };
//# sourceMappingURL=product-card.component.js.map