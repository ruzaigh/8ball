import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomBallPageRoutingModule } from './custom-ball-routing.module';

import { CustomBallPage } from './custom-ball.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomBallPageRoutingModule
  ],
  declarations: [CustomBallPage]
})
export class CustomBallPageModule {}
