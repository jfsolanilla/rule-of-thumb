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

  constructor(
    private celebritiesService: CelebritiesService,
    private eventService: EventService
  ) {
    this.celebrities = [];
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
        }
      });
    });
  }
}
