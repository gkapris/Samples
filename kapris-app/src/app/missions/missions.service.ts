import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IHero } from '../core/hero.interface';
import { IMission } from '../core/mission.interface';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  private missionAddedSource = new Subject<IMission>();
  readonly missionAdded$ = this.missionAddedSource.asObservable();

  private missionsUrl;

  constructor(private http: HttpClient) {
    this.missionsUrl = 'api/heroes';
  }

  assignMission(mission: IMission, hero: IHero): Observable<any> {
    if (!hero.missions) {
      hero.missions = [];
    }
    hero.missions.push(mission);

    return this.http
      .put<IHero>(`${this.missionsUrl}/${hero.id}`, hero)
      .pipe(map(() => this.missionAddedSource.next(mission)));
  }

  completeMission(mission: IMission, hero: IHero): Observable<any> {
    hero.missions = hero.missions.filter((m) => m !== mission);
    return this.http.put<IHero>(`${this.missionsUrl}/${hero.id}`, hero);
  }
}
