import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should find the <router-outlet> with fixture.debugElement.nativeElement', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const htmlElement: HTMLElement = debugElement.nativeElement;
    const routerOutlet = htmlElement.querySelector('router-outlet');

    expect(routerOutlet).toBeTruthy();
  });
});
