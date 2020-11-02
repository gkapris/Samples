import { Component, OnInit } from '@angular/core';
import { Hero } from '../directives/directives.model';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  heroes: Hero[] = [
    { id: 1, name: 'Ironman', team: 'Avengers' },
    { id: 2, name: 'Hulk', team: 'Avengers' },
    { id: 3, name: 'Superman', team: 'Justice' },
    { id: 4, name: 'Batman', team: 'Justice' },
  ];

  hero = {
    names: {
      name: 'Ironman',
      realName: 'Tony Stark',
    },
    planet: 'Earth',
    color: 'Red',
  };

  today: Date = new Date();

  constructor() {}

  ngOnInit(): void {}

  Change() {
    this.heroes = [...this.heroes, { id: 6, name: 'New hero', team: '' }];
  }
}
