import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
let CoreModule = class CoreModule {
};
CoreModule = tslib_1.__decorate([
    NgModule({
        providers: [ShoppingListService,
            RecipeService,
            {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptorService,
                multi: true
            }
        ]
    })
], CoreModule);
export { CoreModule };
//# sourceMappingURL=core.module.js.map