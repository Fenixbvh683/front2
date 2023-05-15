import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewhabilidadComponent } from './newhabilidad.component';

describe('NewhabilidadComponent', () => {
  let component: NewhabilidadComponent;
  let fixture: ComponentFixture<NewhabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewhabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewhabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
