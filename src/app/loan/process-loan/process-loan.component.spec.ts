import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessLoanComponent } from './process-loan.component';

describe('ProcessLoanComponent', () => {
  let component: ProcessLoanComponent;
  let fixture: ComponentFixture<ProcessLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
