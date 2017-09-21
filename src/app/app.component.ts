import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeView: string = 'recipes'; // default view = recipes

  onToggleView(event: { viewName: string }) {
    this.activeView = event.viewName;
  }
}
