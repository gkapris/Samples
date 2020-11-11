import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Hero } from './hero.model';
import { HeroesService } from './heroes.service';
import { Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroDetailResolverService implements Resolve<Hero> {
  constructor(private heroService: HeroesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Hero> {
    const id = +route.paramMap.get('id');

    return this.heroService.getHero(id).pipe(
      take(1),
      mergeMap((hero) => of(hero))
    );
  }
}
