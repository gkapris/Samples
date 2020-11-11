import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero.model';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroesService) {}

  ngOnInit(): void {
    this.heroes$ = this.heroService.getHeroes();
  }
}
