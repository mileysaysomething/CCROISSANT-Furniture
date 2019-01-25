import { TestBed } from '@angular/core/testing';
import { AdminAuthGuard } from './admin-auth-guard.service';
describe('AdminAuthGuardService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(AdminAuthGuard);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=admin-auth-guard.service.spec.js.map