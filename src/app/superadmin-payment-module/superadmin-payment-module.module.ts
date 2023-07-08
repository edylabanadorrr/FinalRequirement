import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperadminPaymentModulePageRoutingModule } from './superadmin-payment-module-routing.module';

import { SuperadminPaymentModulePage } from './superadmin-payment-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperadminPaymentModulePageRoutingModule
  ],
  declarations: [SuperadminPaymentModulePage]
})
export class SuperadminPaymentModulePageModule {}
