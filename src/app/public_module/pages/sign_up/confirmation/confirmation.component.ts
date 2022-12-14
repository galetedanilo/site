import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, SkipSelf } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Reloadable } from '@app/core/interfaces/reloadable.interface';
import { Subject, takeUntil } from 'rxjs';

import { ConfirmationService } from '../shared/services/confirmation.service';
import {
  ConfirmationRequest,
  ConfirmationResponse,
} from './interfaces/confirmation.interface';

@Component({
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit, OnDestroy, Reloadable {
  isLoading: boolean = false;
  isToken: boolean = false;
  isActivated: boolean = false;
  userName: string = '';

  private activationForm = new FormGroup({
    token: new FormControl(''),
  });

  private destroy$: Subject<boolean> = new Subject();

  constructor(
    @SkipSelf() private route: ActivatedRoute,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.isToken = this.route.snapshot.data['isToken'];

    if (this.isToken) {
      this.activateAccount();
    }
  }

  private activateAccount(): void {
    const confirmationRequest: ConfirmationRequest =
      this.route.snapshot.queryParams['token'];

    this.activationForm.patchValue({ token: confirmationRequest.token });

    this.isLoading = true;

    this.confirmationService
      .confirmationNewAccount(this.activationForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: ConfirmationResponse) => {
          this.userName = data.name;
          this.isLoading = false;
          this.isActivated = true;
        },
        error: (error: HttpErrorResponse) => {
          this.isLoading = false;
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
