import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { FeatureRoutingModule } from './customer-routing.module';


@NgModule({
  declarations: [CustomerComponent],
  imports: [
    FeatureRoutingModule,
    CommonModule,
  ]
})
export class CustomerModule { }
