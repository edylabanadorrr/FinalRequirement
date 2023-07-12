import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillingInquiryPageRoutingModule } from './billing-inquiry-routing.module';

import { BillingInquiryPage } from './billing-inquiry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillingInquiryPageRoutingModule
  ],
  declarations: [BillingInquiryPage]
})
export class BillingInquiryPageModule {}
