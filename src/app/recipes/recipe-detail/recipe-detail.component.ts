import { Component, OnInit, ElementRef } from '@angular/core';
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
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      const recipe = this.recipeService.getRecipe(this.id);
      if (!recipe) {
        this.router.navigate(['']);
      }
      this.recipe = recipe;
    });
  }

  onToShoppingListClick() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
