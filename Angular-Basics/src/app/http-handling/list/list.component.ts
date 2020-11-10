import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';
import { Example2 } from '../example.model';
import { Observable, Subject, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  heroes: Example2[];
  private heroSub: Subscription;
  private heroSubject = new Subject();

  // For Async pipe
  heroes$: Observable<Example2[]>;

  constructor(private heroService: ExampleService) {}

  ngOnInit(): void {
    this.getHeroes();
    this.getHeroesAsync();
  }

  ngOnDestroy(): void {
    // this.heroSub.unsubscribe();
    this.heroSubject.next();
    this.heroSubject.complete();
  }

  private getHeroes(): any {
    // this.heroSub = this.heroService.getHeroes().subscribe((heroes) => {
    //   this.heroes = heroes;
    // });
    this.heroService
      .getHeroes()
      .pipe(
        map((heroes) => (this.heroes = heroes)),
        takeUntil(this.heroSubject)
      )
      .subscribe();
  }

  // For Async Pipe
  private getHeroesAsync() {
    this.heroes$ = this.heroService.getHeroes();
  }

  trackByHero(index: number, hero: Example2): number {
    return hero.id;
  }

  add(name: string): void {
    this.heroService
      .createHero(name)
      .subscribe((hero) => this.heroes.push(hero));
  }

  rename(hero: Example2): void {
    const existingHero: Example2 = { id: hero.id, name: 'Pricezog' };
    this.heroService.editHero(hero.id, existingHero).subscribe(() => {
      this.heroes.find((hero) => hero.id).name = 'Pricezog';
    });
  }

  remove(hero: Example2): void {
    this.heroService.deleteHero(hero.id).subscribe(() => {
      this.heroes = this.heroes.filter((selected) => selected !== hero);
    });
  }
}
