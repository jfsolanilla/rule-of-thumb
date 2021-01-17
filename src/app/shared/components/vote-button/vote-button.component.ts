import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.scss']
})
export class VoteButtonComponent implements OnInit {
  @Input() isVoteAgain = false;
  @Output() hasVoted: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {}

  /**
  * On click actions
  */
  onClick(): void {
    this.isVoteAgain = !this.isVoteAgain;
    this.hasVoted.emit(this.isVoteAgain);
  }
}
