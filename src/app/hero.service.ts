import { Injectable } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero [] = [
  { id: 1, name: 'Windstorm'},
  { id: 2, name: 'Mr Pickles'}
];

@Injectable()
export class HeroService {
  getHeroes = function() : Promise<Hero []> {
    return Promise.resolve(HEROES);
  }

  getHero = function (id : number) : Promise<Hero> {
    return Promise.resolve(this.getHeroes().then(heroes => heroes.find(hero => hero.id === id)));
  }
}
