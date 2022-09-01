import { HttpErrorResponse } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';

import { RegistrationService } from '../shared/services/registration.service';
import { RegistrationComponent } from './registration.component';

jest.mock('./services/registration.service.ts');
jest.mock('@angular/material/snack-bar');

describe('RegistrationComponent', () => {
  let fixture: ComponentFixture<RegistrationComponent>;
  let component: RegistrationComponent;

  let registrationServiceSpy: jest.Mocked<RegistrationService>;
  let matSnackBarSpy: jest.Mocked<MatSnackBar>;

  const mockFormValues = {
    name: 'name mocked',
    email: 'emailmocked@mocked.com',
    passwordMatch: {
      password: 'passwordMocked',
      confirm_password: 'passwordMocked',
    },
    terms: true,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      providers: [
        { provide: RegistrationService, useValue: RegistrationService },
        { provide: MatSnackBar, useValue: MatSnackBar },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;

    registrationServiceSpy = TestBed.inject(RegistrationService) as jest.Mocked<RegistrationService>;
    matSnackBarSpy = TestBed.inject(MatSnackBar) as jest.Mocked<MatSnackBar>;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should created', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit()', fakeAsync(() => {
    const mockResponse = { name: 'name mocked', email: 'emailmocked@mocked.com', id: 'dfa45df8d8s7f' };
    
    registrationServiceSpy.registerNewAccount = jest.fn().mockReturnValue(of(mockResponse));

    component.onSubmit(mockFormValues);

    //expect(component.isLoading).toBeTruthy();
    //expect(component.isNewRegister).toBeTruthy();
    tick();

    expect(registrationServiceSpy.registerNewAccount).toHaveBeenCalled();
    expect(component.isNewRegister).toBeFalsy();
    expect(component.isLoading).toBeFalsy();
  }));

  it('should call onSubmit() return HttpErrorResponse', fakeAsync(() => {
    const mockHttpErroResponse = new HttpErrorResponse({
      error: '404 error',
      status: 404,
      statusText: 'Not Found',
    });

    registrationServiceSpy.registerNewAccount = jest.fn().mockReturnValue(of(mockHttpErroResponse));
    matSnackBarSpy.open = jest.fn().mockReturnValue('test');

    component.onSubmit(mockFormValues);

    //expect(component.isLoading).toBeTruthy();
    //expect(component.isNewRegister).toBeTruthy();
    tick();

    expect(registrationServiceSpy.registerNewAccount).toHaveBeenCalled();
    expect(component.isNewRegister).toBeTruthy();
  }));
});
