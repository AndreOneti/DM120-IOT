import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LedPage } from './led.page';

const routes: Routes = [
  {
    path: '',
    component: LedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LedPageRoutingModule {}
