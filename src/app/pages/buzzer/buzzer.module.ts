import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuzzerPageRoutingModule } from './buzzer-routing.module';

import { BuzzerPage } from './buzzer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuzzerPageRoutingModule
  ],
  declarations: [BuzzerPage]
})
export class BuzzerPageModule {}
