import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowGridComponent } from './tv-show-grid.component';

describe('TvShowGridComponent', () => {
  let component: TvShowGridComponent;
  let fixture: ComponentFixture<TvShowGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
