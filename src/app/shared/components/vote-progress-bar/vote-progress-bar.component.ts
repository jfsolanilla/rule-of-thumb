import { Component, Input } from '@angular/core';

import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vote-progress-bar',
  templateUrl: './vote-progress-bar.component.html',
  styleUrls: ['./vote-progress-bar.component.scss']
})
export class VoteProgressBarComponent {
  @Input() upPercentage = 0;
  @Input() downPercentage = 0;

  faThumbsDown = faThumbsDown;
  faThumbsUp = faThumbsUp;
}
