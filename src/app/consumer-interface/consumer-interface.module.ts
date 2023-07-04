import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumerInterfacePageRoutingModule } from './consumer-interface-routing.module';

import { ConsumerInterfacePage } from './consumer-interface.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumerInterfacePageRoutingModule
  ],
  declarations: [ConsumerInterfacePage]
})
export class ConsumerInterfacePageModule {}
