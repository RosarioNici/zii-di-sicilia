import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitleusComponent } from './litleus.component';

describe('LitleusComponent', () => {
  let component: LitleusComponent;
  let fixture: ComponentFixture<LitleusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitleusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LitleusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
