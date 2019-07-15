import * as tslib_1 from "tslib";
import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from '@angular/core';
let AlertComponent = class AlertComponent {
    constructor() {
        this.close = new EventEmitter();
    }
    onClose() {
        this.close.emit(null);
    }
};
tslib_1.__decorate([
    Input()
], AlertComponent.prototype, "message", void 0);
tslib_1.__decorate([
    Output()
], AlertComponent.prototype, "close", void 0);
AlertComponent = tslib_1.__decorate([
    Component({
        selector: 'app-alert',
        templateUrl: './alert.component.html',
        styleUrls: ['./alert.component.css']
    })
], AlertComponent);
export { AlertComponent };
//# sourceMappingURL=alert.component.js.map