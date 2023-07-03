import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalimuEditComponent } from './walimu-edit.component';

describe('WalimuEditComponent', () => {
  let component: WalimuEditComponent;
  let fixture: ComponentFixture<WalimuEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalimuEditComponent]
    });
    fixture = TestBed.createComponent(WalimuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
