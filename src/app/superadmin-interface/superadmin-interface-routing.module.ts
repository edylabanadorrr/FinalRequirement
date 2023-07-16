import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperadminInterfacePage } from './superadmin-interface.page';

const routes: Routes = [
  {
    path: '',
    component: SuperadminInterfacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperadminInterfacePageRoutingModule {}
