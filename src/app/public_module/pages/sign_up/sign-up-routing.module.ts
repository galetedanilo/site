import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfirmationCanLoad } from './shared/guards/confirmation.can.load';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'registration',
    pathMatch: 'full',
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: 'confirmation/:expiredDate/activate-account',
    loadChildren: () =>
      import('./confirmation/confirmation.module').then(
        (m) => m.ConfirmationModule
      ),
    canLoad: [ConfirmationCanLoad],
  },
  {
    path: 'expiration/resend-activation-token',
    loadChildren: () =>
      import('./expiration/expiration.module').then((m) => m.ExpirationModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ConfirmationCanLoad],
})
export class SignUpRoutingModule {}
