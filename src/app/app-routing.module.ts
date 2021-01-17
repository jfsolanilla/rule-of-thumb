import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CelebrityTileComponent } from './shared/components/celebrity-tile/celebrity-tile.component';

const routes: Routes = [
  {
    path: '',
    component: CelebrityTileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
