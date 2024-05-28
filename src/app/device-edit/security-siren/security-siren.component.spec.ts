import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritySirenComponent } from './security-siren.component';

describe('SecuritySirenComponent', () => {
  let component: SecuritySirenComponent;
  let fixture: ComponentFixture<SecuritySirenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecuritySirenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecuritySirenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
