import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.scss']
})
export class VoteButtonComponent {
  @Input() isVoteAgain = false;
  @Output() hasVoted: EventEmitter<boolean> = new EventEmitter();

  /**
  * On click actions
  */
  onClick(): void {
    this.isVoteAgain = !this.isVoteAgain;
    this.hasVoted.emit(this.isVoteAgain);
  }
}
