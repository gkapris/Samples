import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss'],
})
export class LifecycleComponent implements OnInit, OnDestroy {
  @Input() name: string;
  @Output() liked = new EventEmitter();

  constructor() {}

  // Is called upon the initialization of a component.
  // At this stage, all input bindings and data-bound properties
  // have been set appropriately, and we can safely use them.
  ngOnInit(): void {}

  // • Resetting timers and intervals
  // • Unsubscribing from observable streams,
  ngOnDestroy(): void {}

  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  ngOnChanges(changes: SimpleChanges): void {
    const hero = changes['name'];
    const oldValue = hero.previousValue;
    const newValue = hero.currentValue;
    // If we want not to execute on the first change
    if (!hero.isFirstChange()) {
      console.log(`Hero changed from ${oldValue} to ${newValue}`);
    }
  }
}
