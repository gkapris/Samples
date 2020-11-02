import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingModulesListComponent } from './testing-modules-list.component';

describe('TestingModulesListComponent', () => {
  let component: TestingModulesListComponent;
  let fixture: ComponentFixture<TestingModulesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingModulesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingModulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
