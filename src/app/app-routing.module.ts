import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';

import { PageTitleService } from './shared/services/page-title.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public_module/public.module').then((m) => m.PublicModule),
  },
  {
    path: '**', redirectTo: 'not-found', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: PageTitleService }],
})
export class AppRoutingModule {}
