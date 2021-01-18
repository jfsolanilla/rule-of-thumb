import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { VoteInfo } from '../../interfaces/vote-info';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  infoSent: Subject<VoteInfo> = new Subject<VoteInfo>();

  /**
  * Sends subject data
  * @params data - vote info to be sent
  */
  sendItem(data: VoteInfo): void {
    this.infoSent.next(data);
  }

  /**
  * Gets subject data
  * @params data - vote info to be sent
  */
  getItem(): Observable<VoteInfo> {
    return this.infoSent;
  }
}
