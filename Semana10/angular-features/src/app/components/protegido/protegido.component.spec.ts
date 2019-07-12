import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtegidoComponent } from './protegido.component';

describe('ProtegidoComponent', () => {
  let component: ProtegidoComponent;
  let fixture: ComponentFixture<ProtegidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtegidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtegidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
