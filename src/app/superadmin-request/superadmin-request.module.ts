import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperadminRequestPageRoutingModule } from './superadmin-request-routing.module';

import { SuperadminRequestPage } from './superadmin-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperadminRequestPageRoutingModule
  ],
  declarations: [SuperadminRequestPage]
})
export class SuperadminRequestPageModule {}
