import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadNewComponent } from './universidad-new.component';

describe('UniversidadNewComponent', () => {
  let component: UniversidadNewComponent;
  let fixture: ComponentFixture<UniversidadNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversidadNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
