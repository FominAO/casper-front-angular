import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAlarmComponent } from './security-alarm.component';

describe('SecurityAlarmComponent', () => {
  let component: SecurityAlarmComponent;
  let fixture: ComponentFixture<SecurityAlarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityAlarmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecurityAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
