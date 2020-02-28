import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedAppListComponent } from './shared-app-list.component';

describe('SharedAppListComponent', () => {
  let component: SharedAppListComponent;
  let fixture: ComponentFixture<SharedAppListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedAppListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedAppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
