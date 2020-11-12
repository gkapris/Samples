import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegantLoginComponent } from './elegant-login.component';

describe('ElegantLoginComponent', () => {
  let component: ElegantLoginComponent;
  let fixture: ComponentFixture<ElegantLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElegantLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegantLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
