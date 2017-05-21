import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from "app/hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';

  heroes: Hero[];
  selectedHero: Hero;

  constructor(heroService: HeroService) {
    this.heroes = heroService.getHeros();
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
