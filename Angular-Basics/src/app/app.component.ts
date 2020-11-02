import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular-Basics';
  hero = 'Superman';

  @Output() liked = new EventEmitter<boolean>();

  onLike(e) {
    window.alert(`I like ${this.hero}`);
  }
}
