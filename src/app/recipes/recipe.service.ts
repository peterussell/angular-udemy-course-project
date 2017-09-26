import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is just a test recipe',
      'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-' +
      'carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'),
      new Recipe('Test Recipe 2', 'This is just another test recipe',
        'http://www.seriouseats.com/recipes/assets_c/2016/03/20160324-aquafaba' +
        '-pancake-oatmeal-vegan-21-thumb-1500xauto-430826.jpg')
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
