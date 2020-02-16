import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFormTestComponent } from './material-form-test.component';

describe('MaterialFormTestComponent', () => {
  let component: MaterialFormTestComponent;
  let fixture: ComponentFixture<MaterialFormTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialFormTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialFormTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
