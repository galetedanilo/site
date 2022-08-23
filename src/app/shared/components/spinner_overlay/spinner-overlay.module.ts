import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SpinnerOverlayComponent } from './spinner-overlay.component';

@NgModule({
  declarations: [SpinnerOverlayComponent],
  imports: [MatProgressSpinnerModule],
  exports: [SpinnerOverlayComponent],
})
export class SpinnerOverlayModule {}
