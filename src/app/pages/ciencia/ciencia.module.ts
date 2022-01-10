import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CienciaPageRoutingModule } from './ciencia-routing.module';

import { CienciaPage } from './ciencia.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CienciaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CienciaPage]
})
export class CienciaPageModule {}
