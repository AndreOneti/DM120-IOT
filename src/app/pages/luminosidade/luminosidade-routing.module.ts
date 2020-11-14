import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LuminosidadePage } from './luminosidade.page';

const routes: Routes = [
  {
    path: '',
    component: LuminosidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LuminosidadePageRoutingModule {}
