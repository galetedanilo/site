import { Component } from '@angular/core';
import { Reloadable } from '@app/core/interfaces/reloadable.interface';

@Component({
  templateUrl: './expiration.component.html',
  styleUrls: ['./expiration.component.scss'],
})
export class ExpirationComponent implements Reloadable{
  isExpirationToken: boolean = true;
  isLoading: boolean = false;
}

