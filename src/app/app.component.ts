import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from "app/hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {  
  title = 'Tour of Heroes';

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes = this.heroService.getHeros();
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
