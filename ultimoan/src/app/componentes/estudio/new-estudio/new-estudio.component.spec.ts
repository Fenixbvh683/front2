import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEstudioComponent } from './new-estudio.component';

describe('NewEstudioComponent', () => {
  let component: NewEstudioComponent;
  let fixture: ComponentFixture<NewEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
