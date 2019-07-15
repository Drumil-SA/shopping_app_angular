import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let RecipesResolverService = class RecipesResolverService {
    constructor(dataStorageService, recipesService) {
        this.dataStorageService = dataStorageService;
        this.recipesService = recipesService;
    }
    resolve(route, state) {
        const recipes = this.recipesService.getRecipes();
        if (recipes.length === 0) {
            return this.dataStorageService.fetchRecipes();
        }
        else {
            return recipes;
        }
    }
};
RecipesResolverService = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], RecipesResolverService);
export { RecipesResolverService };
//# sourceMappingURL=recipes-resolver.service.js.map