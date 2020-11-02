import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from './directives.model';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  @Input() name: string;
  @Output() liked = new EventEmitter();

  // hero: Hero = { id: 1, name: 'Ironman', team: 'Avengers' };

  heroes: Hero[] = [
    { id: 1, name: 'Ironman', team: 'Avengers' },
    { id: 2, name: 'Hulk', team: 'Avengers' },
    { id: 3, name: 'Superman', team: 'Justice' },
    { id: 4, name: 'Batman', team: 'Justice' },
  ];

  constructor() {}

  ngOnInit(): void {}

  trackByHeroes(index: number, hero: Hero): number {
    return hero.id;
  }
}
