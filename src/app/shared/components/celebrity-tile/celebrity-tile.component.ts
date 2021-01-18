import { BehaviorSubject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

import { EventService } from 'src/app/core/services/event/event.service';
import { VoteInfo } from 'src/app/core/interfaces/vote-info';

@Component({
  selector: 'celebrity-tile',
  templateUrl: './celebrity-tile.component.html',
  styleUrls: ['./celebrity-tile.component.scss']
})
export class CelebrityTileComponent implements OnInit {
  @Input() category = '';
  @Input() description = '';
  @Input() hasVoted = false;
  @Input() imageLink = '';
  @Input() id = -1;
  @Input() name = '';
  @Input() timeInCategory = '';
  @Input() upPercentage = 0;
  @Input() downPercentage = 0;

  isUpFocused = false;
  isDownFocused = false;
  idVoted = new BehaviorSubject({} as VoteInfo);
  voteInfo = {} as VoteInfo;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.setVoteInfo();
  }

  /**
  * Executed when voted
  * @params event - got from child component
  */
  onVoted(event: boolean): void {
    this.hasVoted = event;

    if (this.hasVoted) {
      this.eventService.sendItem(
        { id: this.id, upVote: this.voteInfo.upVote, downVote: this.voteInfo.downVote }
      );
    }
  }

  /**
  * Sets vote info
  */
  setVoteInfo(): void {
   this.eventService.getItem().subscribe((data: VoteInfo) => {
      this.voteInfo = data;
    });
  }

  /**
  * Get elapsed months between dates
  * @params timeInCategory - Time in category
  * @returns elapsed months as a string value
  */
  getElapsedMonths(timeInCategory: string): string {
    let date1 = new Date();
    let date2 = new Date(timeInCategory);
    let elapsedMonths: number;
    let month1 = date1.getMonth();
    let month2 = date2.getMonth();
    let year1 = date1.getFullYear();
    let year2 = date2.getFullYear();

    if(month1 === 0) {
      month1++;
      month2++;
    }

    elapsedMonths = (year1 - year2) * 12 + (month1 - month2);

    return elapsedMonths > 1 ? `${elapsedMonths} months` : `${elapsedMonths} month`;
  }
}
