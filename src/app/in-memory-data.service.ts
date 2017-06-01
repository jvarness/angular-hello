import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 1, name: 'Windstorm'},
      { id: 2, name: 'Mr Pickles'},
      { id: 3, name: 'Captain America'},
      { id: 4, name: 'Ironman'},
      { id: 5, name: 'Tanooki Suit Mario'},
      { id: 6, name: 'Ash Ketchum'}
    ];
    return {heroes};
  }
}
