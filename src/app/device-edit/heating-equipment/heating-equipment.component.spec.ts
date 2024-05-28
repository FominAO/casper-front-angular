import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatingEquipmentComponent } from './heating-equipment.component';

describe('HeatingEquipmentComponent', () => {
  let component: HeatingEquipmentComponent;
  let fixture: ComponentFixture<HeatingEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeatingEquipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeatingEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
