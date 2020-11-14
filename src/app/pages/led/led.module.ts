import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LedPageRoutingModule } from './led-routing.module';

import { LedPage } from './led.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LedPageRoutingModule
  ],
  declarations: [LedPage]
})
export class LedPageModule {}
