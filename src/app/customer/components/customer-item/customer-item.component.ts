import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.scss']
})
export class CustomerItemComponent implements OnInit {

  constructor() { }

  @Input() customerValue!: Customer ;

  ngOnInit(): void {
  }


}
