import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuminosidadePageRoutingModule } from './luminosidade-routing.module';

import { LuminosidadePage } from './luminosidade.page';

import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuminosidadePageRoutingModule,
    ChartModule.forRoot(highcharts),
  ],
  declarations: [LuminosidadePage]
})
export class LuminosidadePageModule {}
