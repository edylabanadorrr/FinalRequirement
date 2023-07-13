import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumerAccountDetailsPageRoutingModule } from './consumer-account-details-routing.module';

import { ConsumerAccountDetailsPage } from './consumer-account-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumerAccountDetailsPageRoutingModule
  ],
  declarations: [ConsumerAccountDetailsPage]
})
export class ConsumerAccountDetailsPageModule {}
