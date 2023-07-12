import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillingInquiryPage } from './billing-inquiry.page';

describe('BillingInquiryPage', () => {
  let component: BillingInquiryPage;
  let fixture: ComponentFixture<BillingInquiryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BillingInquiryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
