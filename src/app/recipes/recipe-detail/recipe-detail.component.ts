import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    const recipeId = +this.route.snapshot.params['id'];
    const recipe = this.recipeService.getRecipe(recipeId);
    if (!recipe) {
      this.router.navigate(['']);
    }
    this.recipe = recipe;

    this.route.params.subscribe((params: Params) => {
      const recipe = this.recipeService.getRecipe(+params['id']);
      if (!recipe) {
        this.router.navigate(['']);
      }
      this.recipe = recipe;
    });
  }

  onToShoppingListClick() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
