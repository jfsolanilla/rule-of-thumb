import { Component, Input } from '@angular/core';

@Component({
  selector: 'celebrity-tile',
  templateUrl: './celebrity-tile.component.html',
  styleUrls: ['./celebrity-tile.component.scss']
})
export class CelebrityTileComponent {
  @Input() category = '';
  @Input() description = '';
  @Input() hasVoted = false;
  @Input() imageLink = '';
  @Input() name = '';
  @Input() timeInCategory = '';

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

  /**
  * Executed when voted
  * @params event - got from child component
  */
  onVoted(event: boolean): void {
    this.hasVoted = event;
  }
}
