import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
var CategoryService = /** @class */ (function () {
    function CategoryService(db) {
        this.db = db;
    }
    CategoryService.prototype.getAll = function () {
        /*
         return this.db.list('/categories',{
           query: {
             orderByChild:'name'
           }
         });
         */
        return this.db
            .list('/categories', function (ref) { return ref.orderByChild('name'); })
            .snapshotChanges()
            .pipe(map(function (actions) { return actions.map(function (a) { return (tslib_1.__assign({ key: a.key }, a.payload.val())); }); }));
    };
    CategoryService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AngularFireDatabase])
    ], CategoryService);
    return CategoryService;
}());
export { CategoryService };
//# sourceMappingURL=category.service.js.map