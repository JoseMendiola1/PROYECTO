import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RomancePageRoutingModule } from './romance-routing.module';

import { RomancePage } from './romance.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RomancePageRoutingModule,
    ComponentsModule
  ],
  declarations: [RomancePage]
})
export class RomancePageModule {}
