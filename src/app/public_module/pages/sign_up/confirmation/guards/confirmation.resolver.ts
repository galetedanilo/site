import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ConfirmationResolver
  implements Resolve<boolean>
{
  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): boolean {
    const token = route.queryParams['token'];

    if (!token || token.length < 20) {
      return false;
    }

    return true;
  }
}
