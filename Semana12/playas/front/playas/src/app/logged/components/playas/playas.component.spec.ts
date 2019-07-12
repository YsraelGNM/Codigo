import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayasComponent } from './playas.component';

describe('PlayasComponent', () => {
  let component: PlayasComponent;
  let fixture: ComponentFixture<PlayasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
