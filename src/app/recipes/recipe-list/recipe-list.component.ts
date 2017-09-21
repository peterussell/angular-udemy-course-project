import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() onRecipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is just a test recipe',
      'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-' +
      'carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'),
      new Recipe('Test Recipe 2', 'This is just another test recipe',
        'http://www.seriouseats.com/recipes/assets_c/2016/03/20160324-aquafaba' +
        '-pancake-oatmeal-vegan-21-thumb-1500xauto-430826.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeClick(recipe: Recipe) {
    this.onRecipeSelected.emit(recipe);
  }
}
