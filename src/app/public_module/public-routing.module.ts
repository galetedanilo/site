import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./pages/sign_up/sign-up.module').then((m) => m.SignUpModule),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./pages/not_found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
