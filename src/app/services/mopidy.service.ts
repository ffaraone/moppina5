import { Injectable } from '@angular/core';
import Mopidy from 'mopidy';

@Injectable({
  providedIn: 'root'
})
export class MopidyService {

  private mopidy: Mopidy;

  constructor() {
    this.mopidy = new Mopidy({
      webSocketUrl: 'ws://localhost:6680/mopidy/ws/'
    });
    this.mopidy.on('state:online', () => {
      console.log('Mopidy online');
    });
   }
}
