import { Component, OnInit } from '@angular/core';
import  { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
@Component({ 
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[];
  private igChangeSub : Subscription;
 
  constructor(private slService : ShoppingListService, private loggingService : LoggingService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged
    .subscribe(
      (ingredients : Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    this.loggingService.printLog("shopping");
  }

  onEditItem(index : number){
      this.slService.startedEditing.next(index);
  }

  ngOnDestroy():void{
    this.slService.ingredientsChanged.unsubscribe();
  }
  
}


