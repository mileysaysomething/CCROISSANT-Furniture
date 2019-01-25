import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
var ProductFilterComponent = /** @class */ (function () {
    function ProductFilterComponent(categoryService) {
        this.categories$ = categoryService.getAll();
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input('category'),
        tslib_1.__metadata("design:type", Object)
    ], ProductFilterComponent.prototype, "category", void 0);
    ProductFilterComponent = tslib_1.__decorate([
        Component({
            selector: 'product-filter',
            templateUrl: './product-filter.component.html',
            styleUrls: ['./product-filter.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [CategoryService])
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());
export { ProductFilterComponent };
//# sourceMappingURL=product-filter.component.js.map