import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaegresoNewComponent } from './fichaegreso-new.component';

describe('FichaegresoNewComponent', () => {
  let component: FichaegresoNewComponent;
  let fixture: ComponentFixture<FichaegresoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaegresoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaegresoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
