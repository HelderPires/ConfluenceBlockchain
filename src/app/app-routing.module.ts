import { Extractor } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  // { path: 'shared', loadChildren: () => import('./modules/shared/shared.module').then(m => m.SharedModule) },
  // { path: 'charts', loadChildren: () => import('./modules/charts/charts.module').then(m => m.ChartsModule) },
  { path: '', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
