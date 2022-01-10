import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicalPageRoutingModule } from './musical-routing.module';

import { MusicalPage } from './musical.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicalPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MusicalPage]
})
export class MusicalPageModule {}
