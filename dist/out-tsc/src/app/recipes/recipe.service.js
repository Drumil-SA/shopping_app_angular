import * as tslib_1 from "tslib";
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let RecipeService = class RecipeService {
    constructor(slService) {
        this.slService = slService;
        this.recipeChanged = new Subject();
        this.recipeSelected = new EventEmitter();
        // private recipes:Recipe[] = [ 
        //     new Recipe("Pizza Recipe",
        //     "Make delicious pizza",
        //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSuwBkC5AlOrPljEATEIN0obmcMqc9cBbsCNHEf4J9rnNLJ7Iw",
        //     [new Ingredient("tomatoes",1),
        //      new Ingredient("onion",2),
        //      new Ingredient("cheese",4)]),
        //     new Recipe("Garlic Bread",
        //     "Make crunchy garlic bread",
        //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSuwBkC5AlOrPljEATEIN0obmcMqc9cBbsCNHEf4J9rnNLJ7Iw",
        //     [
        //       new Ingredient("Bread",6),
        //       new Ingredient("cheese",2),
        //       new Ingredient("garlic",2)
        //     ])
        //   ];
        this.recipes = [];
    }
    setRecipes(recipes) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index) {
        return this.recipes.slice()[index];
    }
    addIngredientsToShoppingList(ingredients) {
        this.slService.addIngredients(ingredients);
    }
    addRecipe(recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }
    updateRecipe(index, newRecipe) {
        this.recipes[index] = newRecipe;
    }
    deleteRecipe(index) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
};
RecipeService = tslib_1.__decorate([
    Injectable()
], RecipeService);
export { RecipeService };
//# sourceMappingURL=recipe.service.js.map