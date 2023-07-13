import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsumerAccountDetailsPage } from './consumer-account-details.page';

describe('ConsumerAccountDetailsPage', () => {
  let component: ConsumerAccountDetailsPage;
  let fixture: ComponentFixture<ConsumerAccountDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsumerAccountDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
