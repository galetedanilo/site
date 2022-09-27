import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';

@Injectable()
export class ConfirmationCanLoad implements CanLoad {
  constructor(private router: Router) {}

  canLoad(_route: Route, segments: UrlSegment[]): boolean {
    const encodedExpiredDate = segments[1];
    const tokenExpired = this.isTokenExpired(encodedExpiredDate);
     
    if (tokenExpired) {
      this.router.navigate(['sign-up', 'expiration', 'resend-activation-token']);
      return false;
    }

    return true;
  }

  private isTokenExpired(token: UrlSegment): boolean {
    const encodedExpiredDate = token.toString();
    const decodeDate = window.atob(encodedExpiredDate);
    const expiredDate = new Date(decodeDate);
    const compareDate = new Date();

    const isValideDate = this.isValideDate(expiredDate);

    if (isValideDate) {
      return compareDate > expiredDate;
    }

    return true;
  }

  private isValideDate(dateToValide: Date): boolean {
    return dateToValide instanceof Date && !isNaN(dateToValide.getTime());
  }
}
