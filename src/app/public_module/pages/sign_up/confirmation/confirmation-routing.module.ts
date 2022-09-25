import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfirmationComponent } from './confirmation.component';
import { ConfirmationResolver } from './guards/confirmation.resolver';

const routes: Routes = [
  {
    path: '',
    title: 'Confirmation Account',
    component: ConfirmationComponent,
    resolve: { isToken: ConfirmationResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ConfirmationResolver],
})
export class ConfirmationRoutingModule {}
