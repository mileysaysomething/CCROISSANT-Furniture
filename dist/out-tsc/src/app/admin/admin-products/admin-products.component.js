import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { DataTableResource } from 'angular5-data-table';
var AdminProductsComponent = /** @class */ (function () {
    function AdminProductsComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.items = [];
        //this.products$ = this.productService.getAll();
        this.subscription = this.productService.getAll()
            .subscribe(function (products) {
            _this.products = products;
            _this.initializeDataTable(products);
        });
    }
    AdminProductsComponent.prototype.initializeDataTable = function (products) {
        var _this = this;
        this.tableResource = new DataTableResource(products);
        this.tableResource.query({ offset: 0 })
            .then(function (items) { return _this.items = items; });
        this.tableResource.count()
            .then(function (count) { return _this.itemCount = count; });
    };
    AdminProductsComponent.prototype.reloadItems = function (params) {
        var _this = this;
        if (!this.tableResource)
            return;
        this.tableResource.query(params)
            .then(function (items) { return _this.items = items; });
    };
    AdminProductsComponent.prototype.filter = function (query) {
        var filteredProducts = (query) ?
            this.products.filter(function (p) { return p.title.toLowerCase().includes(query.toLowerCase()); })
            : this.products;
        this.initializeDataTable(filteredProducts);
    };
    AdminProductsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AdminProductsComponent.prototype.ngOnInit = function () {
    };
    AdminProductsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-admin-products',
            templateUrl: './admin-products.component.html',
            styleUrls: ['./admin-products.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ProductService])
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());
export { AdminProductsComponent };
//# sourceMappingURL=admin-products.component.js.map