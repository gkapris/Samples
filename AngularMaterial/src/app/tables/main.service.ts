import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from './model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private dataUrl = 'api/heroes/';
  constructor(private http: HttpClient) {}

  getData(): Observable<Model[]> {
    return this.http.get<Model[]>(this.dataUrl);
  }
}
