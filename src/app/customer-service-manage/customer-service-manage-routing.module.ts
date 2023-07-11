import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerServiceManagePage } from './customer-service-manage.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerServiceManagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerServiceManagePageRoutingModule {}
