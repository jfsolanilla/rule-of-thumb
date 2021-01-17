import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [MainPageComponent]
})
export class MainPageModule {

}
