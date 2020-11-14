import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UmidadePage } from './umidade.page';

const routes: Routes = [
  {
    path: '',
    component: UmidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UmidadePageRoutingModule {}
