import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicComponent } from './public.component';

describe('PublicComponent', () => {
  let fixture: ComponentFixture<PublicComponent>;
  let component: PublicComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublicComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should created', () => {
    expect(component).toBeTruthy();
  });

  it('should find the <router-outlet> with fixture.debugElement.nativeElement', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const htmlElement: HTMLElement = debugElement.nativeElement;
    const routerOutlet = htmlElement.querySelector('router-outlet');

    expect(routerOutlet).toBeTruthy();
  });
});
