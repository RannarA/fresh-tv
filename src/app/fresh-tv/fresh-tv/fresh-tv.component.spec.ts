import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshTvComponent } from './fresh-tv.component';

describe('FreshTvComponent', () => {
  let component: FreshTvComponent;
  let fixture: ComponentFixture<FreshTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
