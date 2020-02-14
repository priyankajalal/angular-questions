import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeParametrizedComponent } from './pipe-parametrized.component';

describe('PipeParametrizedComponent', () => {
  let component: PipeParametrizedComponent;
  let fixture: ComponentFixture<PipeParametrizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeParametrizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeParametrizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
