import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(private http: Http) {}

  getHeroes = function() : Promise<Hero []> {
    return this.http.get(this.heroesUrl).toPromise().then(response => response.json().data as Hero[]).catch(this.handleError);
  }

  private handleError(error: any) : Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getHero = function (id : number) : Promise<Hero> {
    return this.http.get(`${this.heroesUrl}/${id}`).toPromise().then(response => response.json().data as Hero).catch(this.handleError);
  }

  updateHero = function (hero : Hero) : Promise<Hero> {
    return this.http.put(`${this.heroesUrl}/${hero.id}`, JSON.stringify(hero), new Headers({'Content-Type': 'application/json'})).toPromise().then(() => hero).catch(this.handleError);
  }
}
