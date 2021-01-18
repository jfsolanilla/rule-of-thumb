import { Component, Input } from '@angular/core';

@Component({
  selector: 'celebrity-header',
  templateUrl: './celebrity-header.component.html',
  styleUrls: ['./celebrity-header.component.scss']
})
export class CelebrityHeaderComponent {
  @Input() description = '';
  @Input() imageLink = '';
  @Input() name = '';
  @Input() moreInfoLink = '';
  @Input() closingTime = '';
  @Input() hasVoted = false;

  /**
  * Get elapsed days between dates
  * @returns elapsed days as a string value
  */
  getTimeRemaining(): string {
    let date1 = new Date();
    let date2 = new Date(this.closingTime);
    let time1 = date1.getTime();
    let time2 = date2.getTime();

    const daysRemaining = time2 <= time1
      ? 0
      : Math.floor((time2 - time1) / (1000 * 3600 * 24));

    return daysRemaining > 1 ? `${daysRemaining} days` : `${daysRemaining} day`;
  }
}
