import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss'],
})
export class BasicsComponent implements OnInit {
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

  ngOnInit(): void {}

  onClick() {
    console.log('Hello Event');
  }
}
