import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WanafunziCreateComponent } from './wanafunzi-create.component';

describe('WanafunziCreateComponent', () => {
  let component: WanafunziCreateComponent;
  let fixture: ComponentFixture<WanafunziCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WanafunziCreateComponent]
    });
    fixture = TestBed.createComponent(WanafunziCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
