import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFavComponent } from './example-fav.component';

describe('ExampleFavComponent', () => {
  let component: ExampleFavComponent;
  let fixture: ComponentFixture<ExampleFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleFavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
