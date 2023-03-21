import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CIEditFormComponent } from './ciedit-form.component';

describe('CIEditFormComponent', () => {
  let component: CIEditFormComponent;
  let fixture: ComponentFixture<CIEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CIEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CIEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
