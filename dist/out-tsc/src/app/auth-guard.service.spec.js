import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth-guard.service';
describe('AuthGuard', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(AuthGuard);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=auth-guard.service.spec.js.map