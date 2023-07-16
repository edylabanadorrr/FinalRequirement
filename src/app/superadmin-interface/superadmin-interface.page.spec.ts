import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperadminInterfacePage } from './superadmin-interface.page';

describe('SuperadminInterfacePage', () => {
  let component: SuperadminInterfacePage;
  let fixture: ComponentFixture<SuperadminInterfacePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuperadminInterfacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
