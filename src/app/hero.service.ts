import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 3000))
      .then(() => this.getHeroes());
  }
}
