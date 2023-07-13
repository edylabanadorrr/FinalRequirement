import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumerAccountDetailsPage } from './consumer-account-details.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumerAccountDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumerAccountDetailsPageRoutingModule {}
