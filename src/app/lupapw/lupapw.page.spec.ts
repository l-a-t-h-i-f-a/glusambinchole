import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LupapwPage } from './lupapw.page';

describe('LupapwPage', () => {
  let component: LupapwPage;
  let fixture: ComponentFixture<LupapwPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LupapwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
