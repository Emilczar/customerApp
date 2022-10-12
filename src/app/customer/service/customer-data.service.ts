import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
    providedIn: 'root'
})
export class CustomerDataService {
    private _customers: Customer[] = []
    private _customersSource = new BehaviorSubject<Customer[]>([]);
    public customersChanged$ = new Subject<Customer>();
    customers$ = this._customersSource.asObservable();
    constructor() {
        let id = 1
        this._customers = [
            new Customer(id++, "Adam", "Wozniak"),
            new Customer(id++, "Jan", "Nowak"),
            new Customer(id++, "Paweł", "Kowalski"),
            new Customer(id++, "Ewa", "Nowak"),
            new Customer(id++, "Dawid", "Kowalski"),
            new Customer(id++, "Anna", "Kowalska"),
        ]
    
    }

    initDataCustomers() {
        this._customersSource.next(this._customers)
    }


    addUser(value: Customer) {
        let id = this._customers.length + 1;
        value.id = id;
        this._customers.push(value);
        this._customersSource.next(this._customers)
    }

    updateUser(value: Customer, id: number) {
        let customer = this._customers.find((val) => val.id == id)
        if (customer) {
            customer.name = value.name;
            customer.surname = value.surname;
            this.customersChanged$.next(customer)
        }
    }

}