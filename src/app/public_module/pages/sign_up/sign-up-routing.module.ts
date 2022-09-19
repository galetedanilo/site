import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TokenExpiredDateGuard } from './shared/guards/token-expired-date.guard';

const routes: Routes = [
  { path: '', redirectTo: 'registration', pathMatch: 'full' },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then((m) => m.RegistrationModule),
  },
  {
    path: 'confirmation/:expiredDate/activateAccount',
    loadChildren: () => import('./confirmation/confirmation.module').then((m) => m.ConfirmationModule),
    canLoad: [TokenExpiredDateGuard],
  },
  {
    path: 'expiration/resendActivateToken',
    loadChildren: () => import('./expiration/expiration.module').then((m) => m.ExpirationModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [TokenExpiredDateGuard],
})
export class SignUpRoutingModule {}
