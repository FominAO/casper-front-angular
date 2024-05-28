import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupPowerComponent } from './backup-power.component';

describe('BackupPowerComponent', () => {
  let component: BackupPowerComponent;
  let fixture: ComponentFixture<BackupPowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackupPowerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackupPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
