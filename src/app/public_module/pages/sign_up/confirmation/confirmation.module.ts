import { NgModule } from '@angular/core';

import { ConfirmationService } from '../shared/services/confirmation.service';
import { ConfirmationRoutingModule } from './confirmation-routing.module';
import { ConfirmationComponent } from './confirmation.component';
import { ConfirmationServiceImpl } from './services/confirmation.service';

@NgModule({
  declarations: [ConfirmationComponent],
  imports: [ConfirmationRoutingModule],
  providers: [{ provide: ConfirmationService, useClass: ConfirmationServiceImpl }],
})
export class ConfirmationModule {}
