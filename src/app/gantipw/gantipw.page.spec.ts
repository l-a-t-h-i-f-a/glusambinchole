import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GantipwPage } from './gantipw.page';

describe('GantipwPage', () => {
  let component: GantipwPage;
  let fixture: ComponentFixture<GantipwPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GantipwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
