import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperadminInterfacePageRoutingModule } from './superadmin-interface-routing.module';

import { SuperadminInterfacePage } from './superadmin-interface.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperadminInterfacePageRoutingModule
  ],
  declarations: [SuperadminInterfacePage]
})
export class SuperadminInterfacePageModule {}
