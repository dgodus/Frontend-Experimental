import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaHojaComponent } from './vista-hoja.component';

describe('VistaHojaComponent', () => {
  let component: VistaHojaComponent;
  let fixture: ComponentFixture<VistaHojaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaHojaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaHojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
