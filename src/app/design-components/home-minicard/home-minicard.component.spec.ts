import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMinicardComponent } from './home-minicard.component';

describe('HomeMinicardComponent', () => {
  let component: HomeMinicardComponent;
  let fixture: ComponentFixture<HomeMinicardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMinicardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMinicardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
