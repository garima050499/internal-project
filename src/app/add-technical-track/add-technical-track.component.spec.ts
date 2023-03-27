import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechnicalTrackComponent } from './add-technical-track.component';

describe('AddTechnicalTrackComponent', () => {
  let component: AddTechnicalTrackComponent;
  let fixture: ComponentFixture<AddTechnicalTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTechnicalTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTechnicalTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
