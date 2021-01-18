import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CelebrityHeaderComponent } from './components/celebrity-header/celebrity-header.component';
import { CelebrityTileComponent } from './components/celebrity-tile/celebrity-tile.component';
import { ThumbButtonComponent } from './../shared/components/thumb-button/thumb-button.component';
import { VoteButtonComponent } from './components/vote-button/vote-button.component';
import { VoteProgressBarComponent } from './components/vote-progress-bar/vote-progress-bar.component';

@NgModule({
  declarations: [
    CelebrityTileComponent,
    CelebrityHeaderComponent,
    ThumbButtonComponent,
    VoteButtonComponent,
    VoteProgressBarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  exports: [
    CelebrityTileComponent,
    CelebrityHeaderComponent,
    ThumbButtonComponent,
    VoteButtonComponent
  ]
})
export class SharedModule { }
