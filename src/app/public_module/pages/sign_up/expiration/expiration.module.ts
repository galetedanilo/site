import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExpirationRouterModule } from './expiration-routin.module';
import { ExpirationComponent } from './expiration.component';

@NgModule({
  declarations: [ExpirationComponent],
  imports: [CommonModule, ExpirationRouterModule],
})
export class ExpirationModule {}
