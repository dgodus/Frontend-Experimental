import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaExperienciaComponent } from './vista-experiencia.component';

describe('VistaExperienciaComponent', () => {
  let component: VistaExperienciaComponent;
  let fixture: ComponentFixture<VistaExperienciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaExperienciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
