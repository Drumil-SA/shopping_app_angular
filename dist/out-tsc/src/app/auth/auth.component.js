import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from '../shared/placeholder.directive';
let AuthComponent = class AuthComponent {
    constructor(authService, componentFactoryResolver) {
        this.authService = authService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.isLoginMode = true;
        this.isLoading = false;
        this.error = null;
    }
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
        console.log(this.isLoginMode);
    }
    onSubmit(form) {
        // console.log(form.value);
        if (!form.valid) {
            return;
        }
        let authObs;
        const email = form.value.email;
        const password = form.value.password;
        this.isLoading = true;
        if (this.isLoginMode) {
            authObs = this.authService.login(email, password);
        }
        else {
            authObs = this.authService.signup(email, password);
        }
        authObs.subscribe(resData => {
            console.log(resData);
            this.isLoading = false;
        }, errorMessage => {
            console.log(errorMessage);
            this.error = errorMessage;
            this.showErrorAlert(errorMessage);
            this.isLoading = false;
        });
    }
    onHandleError() {
        this.error = null;
    }
    showErrorAlert(message) {
        // const alertCmp = new AlertComponent();
        const alertcmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();
        const componentRef = hostViewContainerRef.createComponent(alertcmpFactory);
        componentRef.instance.message = message;
        this.closeSub = componentRef.instance.close.subscribe(() => {
            this.closeSub.unsubscribe();
            hostViewContainerRef.clear();
        });
    }
    ngOnDestroy() {
        if (this.closeSub) {
            this.closeSub.unsubscribe();
        }
    }
};
tslib_1.__decorate([
    ViewChild(PlaceholderDirective, { static: false })
], AuthComponent.prototype, "alertHost", void 0);
AuthComponent = tslib_1.__decorate([
    Component({
        selector: 'app-auth',
        templateUrl: './auth.component.html'
    })
], AuthComponent);
export { AuthComponent };
//# sourceMappingURL=auth.component.js.map