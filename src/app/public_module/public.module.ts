import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicHttpService } from '@app/core/services/public-http.service';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { PublicHttpServiceImpl } from './shared/services/public-http.service';

@NgModule({
  declarations: [PublicComponent],
  imports: [CommonModule, PublicRoutingModule],
  providers: [
    {
      provide: PublicHttpService,
      useClass: PublicHttpServiceImpl,
    },
  ],
})
export class PublicModule {}
