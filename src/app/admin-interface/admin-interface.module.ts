import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminInterfacePageRoutingModule } from './admin-interface-routing.module';

import { AdminInterfacePage } from './admin-interface.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminInterfacePageRoutingModule
  ],
  declarations: [AdminInterfacePage]
})
export class AdminInterfacePageModule {}
