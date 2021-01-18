import { Component, OnInit } from '@angular/core';

import { CelebritiesService } from 'src/app/core/services/celebrity/celebrity.service';
import { Celebrity } from 'src/app/core/interfaces/celebrity';
import { EventService } from 'src/app/core/services/event/event.service';
import { VoteInfo } from 'src/app/core/interfaces/vote-info';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  celebrities: Celebrity[];
  celebrityHeader: Celebrity | undefined;

  constructor(
    private celebritiesService: CelebritiesService,
    private eventService: EventService
  ) {
    this.celebrities = [];
    this.celebrityHeader = undefined;
  }

  ngOnInit() {
    this.setCelebrities();
    this.updateVoteInfo();
  }

  /**
  * Sets celebrities in component attribute
  */
  setCelebrities(): void {
    this.celebritiesService.get().subscribe((data: Celebrity[]) => {
      this.celebrities = data;
      this.celebrityHeader = this.celebrities.find((celebrity: Celebrity) => celebrity.isHeader);
    });
  }

  /**
  * Updates vote info - Number of likes or dislikes will be updated
  */
  updateVoteInfo(): void {
    this.eventService.getItem().subscribe((data: VoteInfo) => {
      this.celebrities.forEach((celebrity: Celebrity) => {
        if (data.id === celebrity.id) {
          if (celebrity.numberOfLikes && data.upVote) {
            celebrity.numberOfLikes += 1;
          } else if (celebrity.numberOfDislikes && data.downVote) {
            celebrity.numberOfDislikes += 1;
          }

          celebrity.upPercentage = this.getPercentage(celebrity, celebrity.numberOfLikes);
          celebrity.downPercentage = 100 - celebrity.upPercentage;
        }
      });
    });
  }

  /**
  * Gets percentage of votes
  * @params celebrity - To get like and dislikes values
  * @params value - Value to be checked
  * @returns Percentage value
  */
  getPercentage(celebrity: Celebrity, value: number | undefined): number {
    let result = -1;
    let total: number;

    if (value && celebrity && celebrity.numberOfLikes && celebrity.numberOfDislikes) {
      total = celebrity.numberOfLikes + celebrity.numberOfDislikes;

      result = Math.round(value*100/total);
    }

    return result;
  }
}
