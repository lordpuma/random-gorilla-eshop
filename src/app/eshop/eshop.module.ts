import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EshopRoutingModule } from './eshop-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    EshopRoutingModule
  ],
  declarations: [HomeComponent, DetailComponent]
})
export class EshopModule { }
