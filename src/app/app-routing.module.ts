import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'temperature',
    loadChildren: () => import('./pages/temperature/temperature.module').then( m => m.TemperaturePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'luminosidade',
    loadChildren: () => import('./pages/luminosidade/luminosidade.module').then( m => m.LuminosidadePageModule)
  },
  {
    path: 'umidade',
    loadChildren: () => import('./pages/umidade/umidade.module').then( m => m.UmidadePageModule)
  },
  {
    path: 'buzzer',
    loadChildren: () => import('./pages/buzzer/buzzer.module').then( m => m.BuzzerPageModule)
  },
  {
    path: 'led',
    loadChildren: () => import('./pages/led/led.module').then( m => m.LedPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
