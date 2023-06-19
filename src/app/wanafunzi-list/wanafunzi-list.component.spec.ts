import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WanafunziListComponent } from './wanafunzi-list.component';

describe('WanafunziListComponent', () => {
  let component: WanafunziListComponent;
  let fixture: ComponentFixture<WanafunziListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WanafunziListComponent]
    });
    fixture = TestBed.createComponent(WanafunziListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
