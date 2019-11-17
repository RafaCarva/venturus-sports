import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserRegistratorComponent } from './new-user-registrator.component';

describe('NewUserRegistratorComponent', () => {
  let component: NewUserRegistratorComponent;
  let fixture: ComponentFixture<NewUserRegistratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserRegistratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserRegistratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
