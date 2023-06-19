import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WanafunziEditComponent } from './wanafunzi-edit.component';

describe('WanafunziEditComponent', () => {
  let component: WanafunziEditComponent;
  let fixture: ComponentFixture<WanafunziEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WanafunziEditComponent]
    });
    fixture = TestBed.createComponent(WanafunziEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
