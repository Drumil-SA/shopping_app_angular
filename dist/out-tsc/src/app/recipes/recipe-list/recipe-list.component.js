import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
let RecipeListComponent = class RecipeListComponent {
    constructor(recipeService, router, route) {
        this.recipeService = recipeService;
        this.router = router;
        this.route = route;
        this.recipeWasSelected = new EventEmitter();
    }
    ngOnInit() {
        this.subscription = this.recipeService.recipeChanged
            .subscribe((recipes) => {
            this.recipes = recipes;
        });
        this.recipes = this.recipeService.getRecipes();
    }
    onRecipeSelected(recipe) {
        this.recipeWasSelected.emit(recipe);
    }
    onNewRecipe() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
tslib_1.__decorate([
    Output()
], RecipeListComponent.prototype, "recipeWasSelected", void 0);
RecipeListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-recipe-list',
        templateUrl: './recipe-list.component.html',
        styleUrls: ['./recipe-list.component.css']
    })
], RecipeListComponent);
export { RecipeListComponent };
//# sourceMappingURL=recipe-list.component.js.map