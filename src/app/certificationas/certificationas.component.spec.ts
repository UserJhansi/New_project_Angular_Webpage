import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationasComponent } from './certificationas.component';

describe('CertificationasComponent', () => {
  let component: CertificationasComponent;
  let fixture: ComponentFixture<CertificationasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertificationasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificationasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
