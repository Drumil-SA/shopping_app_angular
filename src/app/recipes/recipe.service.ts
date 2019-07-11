import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core'; 
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
  recipeChanged = new Subject<Recipe[]>();
  recipeSelected = new EventEmitter<Recipe>();

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

    private recipes:Recipe[] = [];
    
      setRecipes(recipes : Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
      }

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index:number){
        return this.recipes.slice()[index];
      }
      
      constructor(private slService:ShoppingListService){}

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index] = newRecipe;
      }

      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
      }
}