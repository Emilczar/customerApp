import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../model/customer';
import { CustomerDataService } from '../service/customer-data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  isDisabled = true;
  customers: Customer[] = []

  @ViewChild('customerSelect') selectCustomer!: MatSelectionList;
  constructor(private customerData: CustomerDataService) {

    this.customerData.customers$.subscribe((value) => {
      this.customers = value;
    })


  }

  ngOnInit(): void {
  }

  onSelect(customer: Customer) {
    if (customer != null) {
      this.isDisabled = false;
    }
  }

  onEdit() {
    let value = <Customer>this.selectCustomer.selectedOptions.selected[0].value
    if (value != null && value.id != null) {

    } 
  }
}
