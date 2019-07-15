import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';
let AuthInterceptorService = class AuthInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        return this.authService.user.pipe(take(1), exhaustMap(user => {
            if (!user) {
                return next.handle(req);
            }
            const modifiedReq = req.clone({
                params: new HttpParams().set('auth', user.token)
            });
            return next.handle(modifiedReq);
        }));
    }
};
AuthInterceptorService = tslib_1.__decorate([
    Injectable()
], AuthInterceptorService);
export { AuthInterceptorService };
//# sourceMappingURL=auth-interceptor.service.js.map