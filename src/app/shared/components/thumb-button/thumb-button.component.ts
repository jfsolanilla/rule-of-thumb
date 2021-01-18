import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import { EventService } from 'src/app/core/services/event/event.service';

@Component({
  selector: 'thumb-button',
  templateUrl: './thumb-button.component.html',
  styleUrls: ['./thumb-button.component.scss']
})
export class ThumbButtonComponent implements OnInit {
  @Input() isUp = true;
  @Output() isDownFocused = new EventEmitter<boolean>();
  @Output() isUpFocused = new EventEmitter<boolean>();

  faThumbsDown = faThumbsDown;
  faThumbsUp = faThumbsUp;

  constructor(private eventService: EventService) {}

  ngOnInit() {}

  /**
  * Executed when button clicked
  */
  onClick(): void {
    if (this.isUp) {
      this.eventService.sendItem({ upVote: true, downVote: false });
    } else {
      this.eventService.sendItem({ upVote: false, downVote: true });
    }
  }
}
