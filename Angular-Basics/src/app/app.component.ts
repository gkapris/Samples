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

  // Refers to basics component
  // onLike(e) {
  //   window.alert(`I like ${this.hero}`);
  // }

  // Refers to lifecycleComponent
  onLike(e) {
    window.alert(`I like ${this.hero}`);
    this.hero = 'Batman';
  }
}
