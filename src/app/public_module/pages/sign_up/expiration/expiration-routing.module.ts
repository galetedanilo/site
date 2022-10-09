import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpirationComponent } from './expiration.component';

const routes: Routes = [{ path: '', title: 'Expiration Token', component: ExpirationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpirationRoutingModule {}
