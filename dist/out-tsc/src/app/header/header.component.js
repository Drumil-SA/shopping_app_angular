import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(dataStorageService, authService) {
        this.dataStorageService = dataStorageService;
        this.authService = authService;
        this.isAuthenticated = false;
    }
    ngOnInit() {
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
            console.log(!user);
            console.log(!!user);
        });
    }
    onSaveData() {
        this.dataStorageService.storeRecipes();
    }
    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
    onLogout() {
        this.authService.logout();
    }
};
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html'
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map