import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { User } from '../shared/interfaces/user.interface';
import { RegistrationService } from '../shared/services/registration.service';
import { RegistrationResponse } from './interfaces/registration.interface';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit, OnDestroy {
  
  isNewRegister: boolean = true;
  isLoading: boolean = false;
  

  private user: User = {
    user_name: '',
    user_email: '',
  };

  private destroy$ = new Subject();

  constructor(private registrationService: RegistrationService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // this.isLoading = true;

    

    // this.registrationService
    //   .registerNewAccount(this.form.value)
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe({
    //     next: (data: RegistrationResponse) => {
    //       this.isNewRegister = false;
    //       this.user.user_name = data.user_name;
    //       this.user.user_email = data.user_email;
    //       this.isLoading = false;
    //     },
    //     error: (error: HttpErrorResponse) => {
    //       this.isLoading = false;
    //     },
    //   });
  }

  get userName(): string {
    return this.user.user_name;
  }

  get userEmail(): string {
    return this.user.user_email;
  }

  

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
