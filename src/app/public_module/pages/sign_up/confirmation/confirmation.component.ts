import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  OnDestroy,
  OnInit,
  SkipSelf,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Reloadable } from '@app/core/interfaces/reloadable.interface';
import { TranslocoService } from '@ngneat/transloco';
import { Subject, takeUntil } from 'rxjs';

import { ConfirmationService } from '../shared/services/confirmation.service';
import { ConfirmationError } from './enums/confirmation-error.enum';
import { ConfirmationResponse } from './interfaces/confirmation.interface';

@Component({
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent
  implements OnInit, OnDestroy, Reloadable
{
  isLoading: boolean = true;
  isAccountActivated: boolean = false;
  userName!: string;

  private token: string = '';
  private destroy$ = new Subject();

  constructor(
    @SkipSelf() private router: Router,
    @SkipSelf() private route: ActivatedRoute,
    @SkipSelf() private matSnackBar: MatSnackBar,
    @SkipSelf() private translocoService: TranslocoService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParams['token'];
    this.verifyTokenExistsAndActivateAccount();
  }

  private verifyTokenExistsAndActivateAccount(): void {
    if (this.token.length > 15) {
      this.activateAccount();
    } else {
      this.isLoading = false;
      this.showSnackBarError(
        ConfirmationError.INVALID_TOKEN
      );
      this.router.navigate([
        'signUp',
        'expiration',
        'resendActivateToken',
      ]);
    }
  }

  private activateAccount(): void {
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

  private showSnackBarError(
    error: ConfirmationError
  ): void {
    const message = this.translocoService
      .translate(error)
      this.matSnackBar.open(message, 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
