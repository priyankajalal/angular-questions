import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpolyeeComponent } from './create-empolyee.component';

describe('CreateEmpolyeeComponent', () => {
  let component: CreateEmpolyeeComponent;
  let fixture: ComponentFixture<CreateEmpolyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmpolyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmpolyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
