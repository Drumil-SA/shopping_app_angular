import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { map, tap } from 'rxjs/operators';
let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.user.pipe(map(user => {
            return !!user;
        }), tap(isAuth => {
            if (!isAuth) {
                this.router.navigate(['/auth']);
            }
        }));
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map