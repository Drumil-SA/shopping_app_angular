import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RecipeDetailComponent = class RecipeDetailComponent {
    constructor(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        const id = this.route.params
            .subscribe((params) => {
            this.id = +params['id'];
            this.recipe = this.recipeService.getRecipe(this.id);
        });
    }
    onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
    onEditRecipe() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }
    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }
};
RecipeDetailComponent = tslib_1.__decorate([
    Component({
        selector: 'app-recipe-detail',
        templateUrl: './recipe-detail.component.html',
        styleUrls: ['./recipe-detail.component.css']
    })
], RecipeDetailComponent);
export { RecipeDetailComponent };
//# sourceMappingURL=recipe-detail.component.js.map