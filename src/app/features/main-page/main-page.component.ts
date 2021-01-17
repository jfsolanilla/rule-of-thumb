import { Component, OnInit } from '@angular/core';

import { CelebritiesService } from 'src/app/core/services/celebrities.service';
import { Celebrity } from 'src/app/core/interfaces/celebrity';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  celebrities: Celebrity[];

  constructor(private celebritiesService: CelebritiesService) {
    this.celebrities = [];
  }

  ngOnInit() {
    this.getCelebrities();
  }

    /**
  * Gets celebrities from svc
  */
  getCelebrities(): void {
    this.celebritiesService.get().subscribe((data: Celebrity[]) => {
      this.celebrities = data;
    });
  }
}
