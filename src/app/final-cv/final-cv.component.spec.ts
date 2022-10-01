import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCvComponent } from './final-cv.component';

describe('FinalCvComponent', () => {
  let component: FinalCvComponent;
  let fixture: ComponentFixture<FinalCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
