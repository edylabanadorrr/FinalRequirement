import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerServiceManagePage } from './customer-service-manage.page';

describe('CustomerServiceManagePage', () => {
  let component: CustomerServiceManagePage;
  let fixture: ComponentFixture<CustomerServiceManagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CustomerServiceManagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
