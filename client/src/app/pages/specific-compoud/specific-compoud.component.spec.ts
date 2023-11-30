import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCompoudComponent } from './specific-compoud.component';

describe('SpecificCompoudComponent', () => {
  let component: SpecificCompoudComponent;
  let fixture: ComponentFixture<SpecificCompoudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificCompoudComponent]
    });
    fixture = TestBed.createComponent(SpecificCompoudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
