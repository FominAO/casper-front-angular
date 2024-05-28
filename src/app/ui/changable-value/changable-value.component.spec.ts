import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangableValueComponent } from './changable-value.component';

describe('ChangableValueComponent', () => {
  let component: ChangableValueComponent;
  let fixture: ComponentFixture<ChangableValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangableValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangableValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
