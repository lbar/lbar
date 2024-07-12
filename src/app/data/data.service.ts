import {Injectable} from '@angular/core';
import moment from 'moment';
import {Moment} from 'moment';

@Injectable()
export class DataService {

  getBirthDate(): Moment {
    return moment('1984-10-08');
  }

  getAge(): number {
    return moment().diff(this.getBirthDate(), 'year');
  }
}
