import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperadminRequestPage } from './superadmin-request.page';

describe('SuperadminRequestPage', () => {
  let component: SuperadminRequestPage;
  let fixture: ComponentFixture<SuperadminRequestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuperadminRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
