import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HojavidaNewComponent } from './hojavida-new.component';

describe('HojavidaNewComponent', () => {
  let component: HojavidaNewComponent;
  let fixture: ComponentFixture<HojavidaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojavidaNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HojavidaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
