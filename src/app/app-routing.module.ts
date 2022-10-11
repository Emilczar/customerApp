import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './404/pagenotfound.component';
const routes: Routes = [
  {
    path: "customer",
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  { path: '**', pathMatch: 'full', 
        component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
