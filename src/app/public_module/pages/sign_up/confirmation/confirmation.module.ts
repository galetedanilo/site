import { NgModule } from "@angular/core";
import { ConfirmationRoutingModule } from "./confirmation-routing.module";
import { ConfirmationComponent } from "./confirmation.component";

@NgModule({
  declarations: [ConfirmationComponent],
  imports: [ConfirmationRoutingModule]
})
export class ConfirmationModule {}
