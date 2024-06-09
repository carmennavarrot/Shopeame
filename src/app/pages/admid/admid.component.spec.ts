import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmidComponent } from './admid.component';

describe('AdmidComponent', () => {
  let component: AdmidComponent;
  let fixture: ComponentFixture<AdmidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
