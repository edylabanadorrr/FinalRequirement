import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerServiceManagePageRoutingModule } from './customer-service-manage-routing.module';

import { CustomerServiceManagePage } from './customer-service-manage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerServiceManagePageRoutingModule
  ],
  declarations: [CustomerServiceManagePage]
})
export class CustomerServiceManagePageModule {}
