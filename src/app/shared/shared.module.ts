import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CelebrityTileComponent } from './components/celebrity-tile/celebrity-tile.component';
import { ThumbButtonComponent } from './../shared/components/thumb-button/thumb-button.component';
import { VoteButtonComponent } from './components/vote-button/vote-button.component';

@NgModule({
  declarations: [
    CelebrityTileComponent,
    ThumbButtonComponent,
    VoteButtonComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  exports: [
    CelebrityTileComponent,
    ThumbButtonComponent,
    VoteButtonComponent
  ]
})
export class SharedModule { }
