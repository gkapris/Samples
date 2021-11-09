import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IHero } from '../core/hero.interface';
import { HeroService } from './heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  @ViewChild(MatDrawer) private drawer?: MatDrawer;
  heroes: IHero[] = [];
  selectedHero?: IHero;

  constructor(private heroService: HeroService, private matDrawer: MatDrawer) {}

  ngOnInit() {
    this.getHeroes();
  }

  onHeroDeleted() {
    this.getHeroes();
    this.drawer.close();
  }

  selectHero(hero: IHero) {
    this.selectedHero = hero;
    this.drawer.open();
  }

  private getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
