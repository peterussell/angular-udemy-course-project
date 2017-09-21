import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() onToggleView = new EventEmitter<{viewName: string}>();

  showRecipesClicked() {
    this.onToggleView.emit({ viewName: 'recipes' });
  }

  showShoppingListClicked() {
    this.onToggleView.emit({ viewName: 'shoppingList' });
  }
}
