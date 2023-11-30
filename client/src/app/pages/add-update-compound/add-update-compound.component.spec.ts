import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateCompoundComponent } from './add-update-compound.component';

describe('AddUpdateCompoundComponent', () => {
  let component: AddUpdateCompoundComponent;
  let fixture: ComponentFixture<AddUpdateCompoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUpdateCompoundComponent]
    });
    fixture = TestBed.createComponent(AddUpdateCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
