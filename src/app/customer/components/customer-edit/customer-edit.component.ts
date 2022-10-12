import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; import { find, map } from 'rxjs';
import { CustomerDataService } from '../../service/customer-data.service';


@Component({
    selector: 'app-customer-edit',
    templateUrl: './customer-edit.component.html',
    styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

    form: FormGroup;
    id: number = 0;
    isAddMode = true;
    constructor(private fb: FormBuilder, private route: ActivatedRoute, private customerData: CustomerDataService) {
        this.form = this.fb.group({
            name: ['', Validators.required],
            surname: ['', Validators.required]
        });

    }

    ngOnInit(): void {
        this.id = parseInt(this.route.snapshot.params['id']);
        this.isAddMode = this.id == 0 ? true : false;

        if (!this.isAddMode) {
            this.customerData.customers$.pipe(map((o) => o.find((val) => val.id == this.id))).subscribe((data) => {
                if (data) {
                    this.form.patchValue(data)
                }

            })


        }
    }

    onSubmit() {

        if (this.isAddMode) {
            this.addUser();
        } else {
            this.updateUser();
        }

    }

    addUser() {
        this.customerData.addUser(this.form.value)
    }
    updateUser() {
        this.customerData.updateUser(this.form.value, this.id)
    }
}
