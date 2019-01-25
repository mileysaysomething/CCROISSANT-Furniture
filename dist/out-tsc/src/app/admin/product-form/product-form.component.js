import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
//only can take one element, auto un-subsribe
import { take } from 'rxjs/operators';
var ProductFormComponent = /** @class */ (function () {
    //only use this in constructors
    function ProductFormComponent(router, route, categoryService, productService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.categoryService = categoryService;
        this.productService = productService;
        this.product = {};
        this.categories$ = categoryService.getAll();
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.productService.get(this.id)
                .valueChanges().pipe(take(1)).subscribe(function (p) { return _this.product = p; });
        }
        //use valueChanges() instead of take();
    }
    ProductFormComponent.prototype.save = function (product) {
        if (this.id) {
            this.productService.update(this.id, product);
        }
        else {
            this.productService.create(product);
        }
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.delete = function () {
        if (!confirm('Are you sure you want to DELETE this product?'))
            return;
        this.productService.delete(this.id);
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.ngOnInit = function () {
    };
    ProductFormComponent = tslib_1.__decorate([
        Component({
            selector: 'app-product-form',
            templateUrl: './product-form.component.html',
            styleUrls: ['./product-form.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            CategoryService,
            ProductService])
    ], ProductFormComponent);
    return ProductFormComponent;
}());
export { ProductFormComponent };
//# sourceMappingURL=product-form.component.js.map