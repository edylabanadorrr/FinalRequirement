import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsumerInterfacePage } from './consumer-interface.page';

describe('ConsumerInterfacePage', () => {
  let component: ConsumerInterfacePage;
  let fixture: ComponentFixture<ConsumerInterfacePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsumerInterfacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
