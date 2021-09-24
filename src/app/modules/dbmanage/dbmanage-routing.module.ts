import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DBManageComponent } from './dbmanage.component';

const routes: Routes = [
  { path: '', component: DBManageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DBManageRoutingModule { }
