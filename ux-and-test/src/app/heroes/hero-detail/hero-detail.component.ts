import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { HeroesService } from '../heroes.service';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroesService
  ) {}

  ngOnInit(): void {
    this.hero = this.route.snapshot.data.hero;
    console.log(this.hero);
    // this.getHeroObs();
    // this.getHeroSnap();
  }

  private getHeroObs(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const id = +params.get('id');
          return this.heroService.getHero(id);
        }),
        map((hero) => (this.hero = hero))
      )
      .subscribe();
  }

  private getHeroSnap(): void {
    const id = this.route.snapshot.params.id;
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }
}
