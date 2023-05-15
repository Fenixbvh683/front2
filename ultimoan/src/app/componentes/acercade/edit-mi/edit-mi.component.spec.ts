import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMiComponent } from './edit-mi.component';

describe('EditMiComponent', () => {
  let component: EditMiComponent;
  let fixture: ComponentFixture<EditMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
