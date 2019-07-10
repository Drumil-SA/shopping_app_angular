import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit,OnDestroy {
  // @ViewChild('nameInput',{static:false}) nameInputRef : ElementRef;
  // @ViewChild('amountInut',{static:false}) amountInputRef : ElementRef;
  @ViewChild('f',{static:false}) slForm : NgForm; 
  subscription : Subscription;
  editMode = false;
  editedItemIndex : number;
  editedItem : Ingredient;

  constructor(private slService : ShoppingListService) { }
  
  ngOnInit() {
    this.subscription = this.slService.startedEditing
    .subscribe(
      (index:number) => {
          this.editedItemIndex = index;
          // console.log(typeof(this.editedItemIndex));
          this.editMode = true;
          this.editedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name : this.editedItem.name,
            amount : this.editedItem.amount
          })
      }
    );
  }

  // addNewIngredient(){
  //   const newInAmount = this.amountInputRef.nativeElement.value;
  //   // console.log(newInAmount);
  //   const newInName = this.nameInputRef.nativeElement.value;
  //   // console.log(newInName);
  //   const newIn = new Ingredient(newInName,newInAmount);
  //   this.slService.addIngredient(newIn);
  // }

  onAddItem(form : NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex , newIngredient);
    }else{
    this.slService.addIngredient(newIngredient); 
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}