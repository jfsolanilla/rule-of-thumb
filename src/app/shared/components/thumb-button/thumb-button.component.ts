import { Component, Input, OnInit } from '@angular/core';

import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'thumb-button',
  templateUrl: './thumb-button.component.html',
  styleUrls: ['./thumb-button.component.scss']
})
export class ThumbButtonComponent implements OnInit {
  @Input() isUp = true;

  faThumbsDown = faThumbsDown;
  faThumbsUp = faThumbsUp;

  ngOnInit() {}
}
