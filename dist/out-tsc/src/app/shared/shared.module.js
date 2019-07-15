import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder.directive';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';
let SharedModule = class SharedModule {
};
SharedModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AlertComponent,
            LoadingSpinnerComponent,
            PlaceholderDirective,
            DropdownDirective
        ],
        imports: [
            CommonModule
        ],
        exports: [
            AlertComponent,
            LoadingSpinnerComponent,
            PlaceholderDirective,
            DropdownDirective,
            CommonModule
        ],
        entryComponents: [
            AlertComponent
        ]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map