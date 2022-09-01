import { Injectable } from '@angular/core';
import { ActivatedRoute, CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CanLoadConfirmation implements CanLoad {
  constructor(private router: ActivatedRoute) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token = this.router.snapshot.queryParamMap.get('token');

    console.log(route)
    
    if(token) {
      return true
    } else {
      return false
    }
  }
}
