import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appart01Component } from './appart01.component';

describe('Appart01Component', () => {
  let component: Appart01Component;
  let fixture: ComponentFixture<Appart01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Appart01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appart01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
