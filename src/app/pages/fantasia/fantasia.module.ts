import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FantasiaPageRoutingModule } from './fantasia-routing.module';

import { FantasiaPage } from './fantasia.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FantasiaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FantasiaPage]
})
export class FantasiaPageModule {}
