import { Example } from './example';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  constructor() {}

  getHeroes(): Example[] {
    return [
      { id: 1, name: 'Ironman', team: 'avengers' },
      { id: 2, name: 'Drogfisher', team: 'avengers' },
      { id: 3, name: 'Bloodyllips', team: 'villains' },
      { id: 4, name: 'Mr Bu Moverse', team: 'villains' },
      { id: 5, name: 'Piranhaelli', team: '' },
    ];
  }
}
