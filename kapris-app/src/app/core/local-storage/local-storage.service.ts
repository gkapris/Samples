import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  get(name: string): any[] | undefined {
    return JSON.parse(localStorage.getItem(name) || '{}') ?? undefined;
  }

  set(name: string, value: any[]): void {
    localStorage.setItem(name, JSON.stringify(value));
  }
}
