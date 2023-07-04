import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumerInterfacePage } from './consumer-interface.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumerInterfacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumerInterfacePageRoutingModule {}
