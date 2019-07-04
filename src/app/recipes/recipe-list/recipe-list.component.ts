import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [ 
    new Recipe("Pizza Recipe","Make delicious pizza","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSuwBkC5AlOrPljEATEIN0obmcMqc9cBbsCNHEf4J9rnNLJ7Iw"),
    new Recipe("Garlic Bread","Make crunchy garlic bread","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSuwBkC5AlOrPljEATEIN0obmcMqc9cBbsCNHEf4J9rnNLJ7Iw")
  ];
  constructor() { }

  ngOnInit() {
  }

}
