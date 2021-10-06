import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DBManageComponent } from './dbmanage.component';
import { TokenAPIService } from 'src/app/modules/shared/services/token-api.service';
import { SharedModule } from '../shared/shared.module';
import { DBManageRoutingModule } from './dbmanage-routing.module';


@NgModule({
  declarations: [
    DBManageComponent
  ],
  imports: [
    CommonModule,
    DBManageRoutingModule,
    SharedModule
  ],
  providers: [
    TokenAPIService
  ]
})
export class DBManageModule { }
