import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()
export class HeroService {

  constructor() { }

  getHeros(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
