import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuzzerPage } from './buzzer.page';

const routes: Routes = [
  {
    path: '',
    component: BuzzerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuzzerPageRoutingModule {}
