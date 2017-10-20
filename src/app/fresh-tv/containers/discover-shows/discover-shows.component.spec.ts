import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverShowsComponent } from './discover-shows.component';

describe('DiscoverShowsComponent', () => {
  let component: DiscoverShowsComponent;
  let fixture: ComponentFixture<DiscoverShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
