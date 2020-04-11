import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildContactoComponent } from './child-contacto.component';

describe('ChildContactoComponent', () => {
  let component: ChildContactoComponent;
  let fixture: ComponentFixture<ChildContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
