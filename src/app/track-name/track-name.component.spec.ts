import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackNameComponent } from './track-name.component';

describe('TrackNameComponent', () => {
  let component: TrackNameComponent;
  let fixture: ComponentFixture<TrackNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
