import { TestBed } from '@angular/core/testing';
import { ShoppingCartService } from './shopping-cart.service';
describe('ShoppingCartService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ShoppingCartService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=shopping-cart.service.spec.js.map