import { ExampleService } from './../example.service';
import { Example } from './../example';
import { Injectable } from '@angular/core';

@Injectable()
export class ExampleDetailService {
  private hero: Example;

  constructor(private heroService: ExampleService) {}

  getHero(id: number): Example {
    const heroes = this.heroService.getHeroes();
    if (!this.hero) {
      this.hero = heroes.find((hero) => hero.id === id);
    }
    return this.hero;
  }
}
