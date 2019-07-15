import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
export class ShoppingListService {
    constructor() {
        this.ingredientsChanged = new Subject();
        this.startedEditing = new Subject();
        this.ingredients = [
            new Ingredient('Apple', 5),
            new Ingredient('Tomatoes', 10)
        ];
    }
    getIngredients() {
        return this.ingredients.slice();
    }
    getIngredient(index) {
        return this.ingredients[index];
    }
    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
        // console.log(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients) {
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(index, newIngredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
//# sourceMappingURL=shopping-list.service.js.map