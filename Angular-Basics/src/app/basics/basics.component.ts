import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss'],
})
export class BasicsComponent {
  title = 'Basics with Angular';
  myText = 'Just testing';

  currentClasses = {
    // star: true,
    // active: true,
    color: 'blue',
  };

  @Input() name: string;
  @Output() liked = new EventEmitter();

  constructor() {}

  onClick() {
    console.log('Hello Event');
  }
}
