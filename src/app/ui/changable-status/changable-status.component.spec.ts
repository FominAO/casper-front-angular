import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangableStatusComponent } from './changable-status.component';

describe('ChangableStatusComponent', () => {
  let component: ChangableStatusComponent;
  let fixture: ComponentFixture<ChangableStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangableStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangableStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
