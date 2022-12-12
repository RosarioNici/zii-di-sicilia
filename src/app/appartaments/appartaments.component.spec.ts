import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartamentsComponent } from './appartaments.component';

describe('AppartamentsComponent', () => {
  let component: AppartamentsComponent;
  let fixture: ComponentFixture<AppartamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppartamentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppartamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
