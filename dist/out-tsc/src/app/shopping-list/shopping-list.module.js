import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
let ShoppingModule = class ShoppingModule {
};
ShoppingModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            ShoppingListComponent,
            ShoppingEditComponent
        ],
        imports: [
            FormsModule,
            RouterModule.forChild([
                { path: 'shopping-list', component: ShoppingListComponent }
            ]),
            SharedModule
        ]
    })
], ShoppingModule);
export { ShoppingModule };
//# sourceMappingURL=shopping-list.module.js.map