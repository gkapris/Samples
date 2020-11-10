import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { ExampleService } from 'src/app/http-handling/example.service';
import { Example3 } from '../example.model';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.scss'],
})
export class Example3Component implements OnInit, OnDestroy {
  heroes: Example3[];
  private heroSub: Subscription;
  private heroSubject = new Subject();

  // For Async pipe
  heroes$: Observable<Example3[]>;

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
  private getHeroesAsync(): void {
    this.heroes$ = this.heroService.getHeroes();
  }

  trackByHero(index: number, hero: Example3): number {
    return hero.id;
  }

  add(name: string): void {
    this.heroService
      .createHero(name)
      .subscribe((hero) => this.heroes.push(hero));
  }

  rename(hero: Example3): void {
    const existingHero: Example3 = { id: hero.id, name: 'Pricezog' };
    this.heroService.editHero(hero.id, existingHero).subscribe(() => {
      this.heroes.find((hero) => hero.id).name = 'Pricezog';
    });
  }

  remove(hero: Example3): void {
    this.heroService.deleteHero(hero.id).subscribe(() => {
      this.heroes = this.heroes.filter((selected) => selected !== hero);
    });
  }
}
