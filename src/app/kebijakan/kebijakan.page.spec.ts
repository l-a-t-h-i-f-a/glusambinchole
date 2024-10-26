import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KebijakanPage } from './kebijakan.page';

describe('KebijakanPage', () => {
  let component: KebijakanPage;
  let fixture: ComponentFixture<KebijakanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KebijakanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
