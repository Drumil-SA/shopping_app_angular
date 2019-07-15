import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    NgModule({
        declarations: [AuthComponent],
        imports: [
            CommonModule,
            FormsModule,
            RouterModule.forChild([{ path: 'auth', component: AuthComponent }]),
            SharedModule
        ]
    })
], AuthModule);
export { AuthModule };
//# sourceMappingURL=auth.module.js.map