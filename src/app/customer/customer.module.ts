import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { FeatureRoutingModule } from './customer-routing.module';
import { CustomerItemComponent } from './components/customer-item/customer-item.component';
import { CustomerDataService } from './service/customer-data.service';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [CustomerComponent, CustomerItemComponent, CustomerEditComponent, CustomerListComponent],
  imports: [
    FeatureRoutingModule,
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
