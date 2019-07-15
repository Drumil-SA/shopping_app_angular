import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
let DataStorageService = class DataStorageService {
    constructor(http, recipeService, authService) {
        this.http = http;
        this.recipeService = recipeService;
        this.authService = authService;
    }
    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put("https://ng-course-recipe-book-b1a70.firebaseio.com/recipes.json", recipes).
            subscribe(response => {
            console.log(response);
        });
    }
    fetchRecipes() {
        return this.http.get("https://ng-course-recipe-book-b1a70.firebaseio.com/recipes.json").pipe(map(recipes => {
            return recipes.map(recipe => {
                return Object.assign({}, recipe, { ingredients: recipe.ingredients ? recipe.ingredients : [] });
            });
        }), tap(recipes => {
            this.recipeService.setRecipes(recipes);
        }));
    }
};
DataStorageService = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], DataStorageService);
export { DataStorageService };
//# sourceMappingURL=data-storage.service.js.map