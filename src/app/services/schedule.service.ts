import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { Schedule } from '../models/schedule.interface';
import { EveningEvent } from '../models/evening-event.interface';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpclient: HttpClient) { }

  search(term: string): Observable<EveningEvent[]> {
    const termLowercase = term.toLocaleLowerCase();
    console.log('search');
    return this.httpclient.get<Schedule>('assets/schedules.json')
                          .pipe(
                            // tslint:disable-next-line: max-line-length
                            map(res => res.events.filter(evt => evt.title.toLocaleLowerCase().indexOf(term) > -1 || evt.description.toLocaleLowerCase().indexOf(term) > -1)),
                            tap(filteredEvents => console.log('filteredEvents', filteredEvents))
                          );
  }
}
