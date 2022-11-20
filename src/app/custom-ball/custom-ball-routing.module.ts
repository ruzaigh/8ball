import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomBallPage } from './custom-ball.page';

const routes: Routes = [
  {
    path: '',
    component: CustomBallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomBallPageRoutingModule {}
