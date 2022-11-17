import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsItemComponent } from './animals-item.component';

describe('AnimalsItemComponent', () => {
  let component: AnimalsItemComponent;
  let fixture: ComponentFixture<AnimalsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
