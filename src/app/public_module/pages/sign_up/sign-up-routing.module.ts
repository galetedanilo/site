import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenExpiredDateGuard } from './shared/guards/token-expired-date.guard';

const routes: Routes = [
  { path: '', redirectTo: 'registration', pathMatch: 'full' },
  {
    path: 'registration',
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: 'confirmation/:expiredDate/activatedAccount',
    loadChildren: () =>
      import('./confirmation/confirmation.module').then(
        (m) => m.ConfirmationModule
      ),
    canLoad: [TokenExpiredDateGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [TokenExpiredDateGuard]
})
export class SignUpRoutingModule {}
