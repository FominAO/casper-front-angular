import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceEditComponent } from './device-edit.component';
import { MatDivider } from '@angular/material/divider';
import { EditNameComponent } from '../ui/edit-name/edit-name.component';

describe('DeviceEditComponent', () => {
  let component: DeviceEditComponent;
  let fixture: ComponentFixture<DeviceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceEditComponent, MatDivider, EditNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeviceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
