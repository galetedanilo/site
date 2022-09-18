import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, SkipSelf } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { ConfirmationService } from '../shared/services/confirmation.service';
import { ConfirmationResponse } from './interfaces/confirmation.interface';

@Component({
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;
  isAccountActivated: boolean = false;
  userName!: string;

  private token: string = '';
  private destroy$ = new Subject();

  constructor(
    @SkipSelf() private router: Router,
    @SkipSelf() private route: ActivatedRoute,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParams['token'];
    this.verifyTokenExistsAndTokenIsValid();
  }

  private verifyTokenExistsAndTokenIsValid(): void {
    if (this.token.length > 15) {
      this.submitTokenToConfirmationAccount();
    } else {
      this.router.navigate(['/login']);
    }
  }

  private submitTokenToConfirmationAccount(): void {
    this.confirmationService
      .confirmationNewAccount(this.token)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: ConfirmationResponse) => {
          this.userName = data.name;
        },
        error: (error: HttpErrorResponse) => {},
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
