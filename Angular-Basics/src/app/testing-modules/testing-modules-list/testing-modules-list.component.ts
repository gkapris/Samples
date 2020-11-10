import { ExampleService } from './../../dependency-inj/example.service';
import { Component, OnInit } from '@angular/core';
import { Example } from 'src/app/dependency-inj/example';

@Component({
  selector: 'app-testing-modules-list',
  templateUrl: './testing-modules-list.component.html',
  styleUrls: ['./testing-modules-list.component.scss'],
})
export class TestingModulesListComponent implements OnInit {
  heroes: Example[];

  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {
    this.heroes = this.exampleService.getHeroes();
  }

  trackByHero(index: number, hero: Example): number {
    return hero.id;
  }
}
