import { BehaviorSubject } from 'rxjs';
import { Customer } from '../model/customer';


export class CustomerDataService {

  private _customersSource = new BehaviorSubject<Customer[]>([]);
  customers$ = this._customersSource.asObservable();
    constructor() { 
        this.initDataCustomers()
    }

    getCustomers() {
        return 
    }


    initDataCustomers() {
        let id = 1
        let customers: Customer[] = [
           new Customer(id++,"Adam", "Wozniak"),
           new Customer(id++,"Jan", "Nowak"),
           new Customer(id++,"Paweł", "Kowalski"),
           new Customer(id++,"Ewa", "Nowak"),
           new Customer(id++,"Dawid", "Kowalski"),
           new Customer(id++,"Anna", "Kowalska"),
        ]
        this._customersSource.next(customers)
    }

}