import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalimuListComponent } from './walimu-list.component';

describe('WalimuListComponent', () => {
  let component: WalimuListComponent;
  let fixture: ComponentFixture<WalimuListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalimuListComponent]
    });
    fixture = TestBed.createComponent(WalimuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
