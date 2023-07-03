import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentvComponent } from './studentv.component';

describe('StudentvComponent', () => {
  let component: StudentvComponent;
  let fixture: ComponentFixture<StudentvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentvComponent]
    });
    fixture = TestBed.createComponent(StudentvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
