import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHero } from '../core/hero.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl;

  constructor(private http: HttpClient) {
    this.heroesUrl = 'api/heroes';
  }

  createHero(hero: IHero): Observable<any> {
    return this.http.post<IHero>(this.heroesUrl, hero);
  }

  deleteHero(id: string): Observable<any> {
    return this.http.delete(`${this.heroesUrl}/${id}`);
  }

  getHero(id: string): Observable<IHero> {
    return this.http.get<IHero>(`${this.heroesUrl}/${id}`);
  }

  getHeroes(): Observable<IHero[]> {
    return this.http.get<IHero[]>(this.heroesUrl);
  }
}
