import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { User } from '../shared/interfaces/user.interface';
import { RegistrationService } from '../shared/services/registration.service';
import { RegistrationRequest, RegistrationResponse } from './interfaces/registration.interface';
import { RegistrationMapper } from './mappers/registration.mapper';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit, OnDestroy {
  isNewRegister: boolean = true;
  isLoading: boolean = false;

  private user: User = {
    name: '',
    email: '',
  };

  private destroy$ = new Subject();

  constructor(private registrationService: RegistrationService) {}

  ngOnInit(): void {}

  onSubmit(event: object): void {
    this.isLoading = true;

    const request: RegistrationRequest =
      RegistrationMapper.mapperFormValueToRegistrationRequest(event);

    this.registrationService
      .registerNewAccount(request)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: RegistrationResponse) => {
          this.isNewRegister = false;
          this.user = RegistrationMapper.mapperRegistrationResponseToUser(data);
          this.isLoading = false;
        },
        error: (error: HttpErrorResponse) => {
          
        },
      });
  }

  get userName(): string {
    return this.user.name;
  }

  get userEmail(): string {
    return this.user.email;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
