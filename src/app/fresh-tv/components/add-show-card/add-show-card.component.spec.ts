import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShowCardComponent } from './add-show-card.component';

describe('AddShowCardComponent', () => {
  let component: AddShowCardComponent;
  let fixture: ComponentFixture<AddShowCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShowCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
