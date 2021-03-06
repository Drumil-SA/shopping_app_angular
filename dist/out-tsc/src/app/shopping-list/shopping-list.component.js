import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ShoppingListComponent = class ShoppingListComponent {
    constructor(slService) {
        this.slService = slService;
    }
    ngOnInit() {
        this.ingredients = this.slService.getIngredients();
        this.slService.ingredientsChanged
            .subscribe((ingredients) => {
            this.ingredients = ingredients;
        });
    }
    onEditItem(index) {
        this.slService.startedEditing.next(index);
    }
    ngOnDestroy() {
        this.slService.ingredientsChanged.unsubscribe();
    }
};
ShoppingListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-shopping-list',
        templateUrl: './shopping-list.component.html',
        styleUrls: ['./shopping-list.component.css']
    })
], ShoppingListComponent);
export { ShoppingListComponent };
//# sourceMappingURL=shopping-list.component.js.map