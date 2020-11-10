import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDetailsComponent } from './example-details.component';

describe('ExampleDetailsComponent', () => {
  let component: ExampleDetailsComponent;
  let fixture: ComponentFixture<ExampleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
