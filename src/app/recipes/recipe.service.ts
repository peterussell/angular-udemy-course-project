import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty schnitzel',
      'A super tasty schnitzel, just awesome!',
      'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-' +
      'carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Burger',
      'Can\'t go wrong with this classic',
      'http://www.seriouseats.com/recipes/assets_c/2016/03/20160324-aquafaba' +
      '-pancake-oatmeal-vegan-21-thumb-1500xauto-430826.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ];

  getRecipes() {
    /* JavaScript arrays are *reference* types, which means if we just returned
       this.recipes, then any modifications by the caller would modify the
       recipes array contained in this service.
       Therefore, it's important we return a copy of the array, which we do by
       calling slice() with no args. */
    return this.recipes.slice();
  }
}
