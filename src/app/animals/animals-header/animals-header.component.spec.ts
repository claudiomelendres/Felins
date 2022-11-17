import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsHeaderComponent } from './animals-header.component';

describe('AnimalsHeaderComponent', () => {
  let component: AnimalsHeaderComponent;
  let fixture: ComponentFixture<AnimalsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
