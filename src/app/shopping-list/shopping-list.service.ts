import { Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  @Output() ingredientAdded = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    if (!ingredients || ingredients.length < 1) return;
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
