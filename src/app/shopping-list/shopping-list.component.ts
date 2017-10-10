import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private ingredients: Ingredient[];
  private ingAddedSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    /* Now this is an rxjs/Subject, Angular no longer handles unsubscribe
       automatically (like it does for EventEmitter subscribe()), so we need
       to manually unsubscribe in ngOnDestroy(). */
    this.ingAddedSubscription = this.shoppingListService.ingredientAdded.subscribe(
      (newIngredients: Ingredient[]) => {
        this.ingredients = newIngredients;
      }
    );
  }

  ngOnDestroy() {
    this.ingAddedSubscription.unsubscribe();
  }
}
