import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EshopRoutingModule } from './eshop-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { RegistraceComponent } from './registrace/registrace.component';
import { RandomyInfoComponent } from './randomy-info/randomy-info.component';
import { UpravitUcetComponent } from './upravit-ucet/upravit-ucet.component';
import { MujUcetComponent } from './muj-ucet/muj-ucet.component';

@NgModule({
  imports: [
    CommonModule,
    EshopRoutingModule
  ],
  declarations: [HomeComponent, DetailComponent, RegistraceComponent, RandomyInfoComponent, UpravitUcetComponent, MujUcetComponent]
})
export class EshopModule { }
