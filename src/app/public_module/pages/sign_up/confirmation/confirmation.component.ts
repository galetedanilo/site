import { Component, OnInit, SkipSelf } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reloadable } from '@app/core/interfaces/reloadable.interface';

@Component({
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent
  implements OnInit, Reloadable
{
  isLoading: boolean = false;
  isToken: boolean = false;
  userName: string = '';


  constructor(
    @SkipSelf() private router: Router,
    @SkipSelf() private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isToken = this.route.snapshot.data['isToken'];
  }
}
