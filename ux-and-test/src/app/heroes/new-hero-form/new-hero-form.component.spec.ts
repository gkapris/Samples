import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHeroFormComponent } from './new-hero-form.component';

describe('NewHeroFormComponent', () => {
  let component: NewHeroFormComponent;
  let fixture: ComponentFixture<NewHeroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHeroFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
