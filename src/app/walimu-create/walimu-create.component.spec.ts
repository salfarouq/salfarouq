import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalimuCreateComponent } from './walimu-create.component';

describe('WalimuCreateComponent', () => {
  let component: WalimuCreateComponent;
  let fixture: ComponentFixture<WalimuCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalimuCreateComponent]
    });
    fixture = TestBed.createComponent(WalimuCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
