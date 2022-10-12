import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { Router } from '@angular/router';
import { Customer } from '../../model/customer';
import { CustomerDataService } from '../../service/customer-data.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  isDisabled = true;
  customers: Customer[] = []

  @ViewChild('customerSelect') selectCustomer!: MatSelectionList;
  constructor(private customerData: CustomerDataService, private route: Router) {

  

    this.customerData.customers$.subscribe((value) => {
      this.customers = value;
    }).add(this.customerData.customersChanged$.subscribe((data)=> {
     let custumer = this.customers.find((o)=> o.id == data.id)
     if(custumer) {
      custumer.name = data.name;
      custumer.surname = data.surname;
     }
  
    }))


  }

  ngOnInit(): void {
    this.customerData.initDataCustomers();
  }

  onSelect(customer: Customer) {
    if (customer != null) {
      this.isDisabled = false;
    }
  }

  onEdit() {
    let value = <Customer>this.selectCustomer.selectedOptions.selected[0].value
    if (value != null && value.id != null) {
      this.route.navigate(['customer', value.id])
    }
  }

  onAdd() {
    this.route.navigate(['customer', 0])
  }
}
