import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAskComponent } from './dialog-ask.component';

describe('DialogAskComponent', () => {
  let component: DialogAskComponent;
  let fixture: ComponentFixture<DialogAskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
