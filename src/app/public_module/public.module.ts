import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicHttpService } from '@app/core/services/public-http.service';

import { PublicRoutingModule } from './public-routing.module';
import { PublicHttpServiceImpl } from './shared/services/public-http.service';

@NgModule({
  imports: [CommonModule, PublicRoutingModule],
  providers: [
    {
      provide: PublicHttpService,
      useClass: PublicHttpServiceImpl,
    },
  ],
})
export class PublicModule {}
