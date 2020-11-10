import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Example3 } from './example.model';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  private heroesURL = 'api/heroes/';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Example3[]> {
    return this.http
      .get<Example3[]>(this.heroesURL, {
        headers: new HttpHeaders({ Authorization: '123456' }),
      })
      .pipe(
        retry(2),
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError(error);
        })
      );
  }

  createHero(name: string): Observable<Example3> {
    const hero = { name };
    return this.http.post<Example3>(this.heroesURL, hero);
  }

  editHero(id: number, hero: Example3): Observable<any> {
    return this.http.put(this.heroesURL + id, hero);
  }

  deleteHero(id: number): Observable<any> {
    return this.http.delete(this.heroesURL + id);
  }
}
