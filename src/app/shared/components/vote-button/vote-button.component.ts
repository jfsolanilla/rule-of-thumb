import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.scss']
})
export class VoteButtonComponent implements OnInit {
  @Input() isVoteAgain = false;

  constructor() { }

  ngOnInit(): void {
  }

}
