import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer/customer.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';


const routes: Routes = [

    { path: '', component: CustomerListComponent },
    { path: ':id', component: CustomerEditComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
