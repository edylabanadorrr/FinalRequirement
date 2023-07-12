import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillingInquiryPage } from './billing-inquiry.page';

const routes: Routes = [
  {
    path: '',
    component: BillingInquiryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillingInquiryPageRoutingModule {}
