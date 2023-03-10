import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphRepresentationComponent } from './graph-representation.component';

describe('GraphRepresentationComponent', () => {
  let component: GraphRepresentationComponent;
  let fixture: ComponentFixture<GraphRepresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphRepresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
