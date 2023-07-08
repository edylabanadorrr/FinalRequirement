import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperadminPaymentModulePage } from './superadmin-payment-module.page';

describe('SuperadminPaymentModulePage', () => {
  let component: SuperadminPaymentModulePage;
  let fixture: ComponentFixture<SuperadminPaymentModulePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuperadminPaymentModulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
