import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshValueComponent } from './refresh-value.component';

describe('RefreshValueComponent', () => {
  let component: RefreshValueComponent;
  let fixture: ComponentFixture<RefreshValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefreshValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefreshValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
