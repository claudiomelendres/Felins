import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsAddComponent } from './animals-add.component';

describe('AnimalsAddComponent', () => {
  let component: AnimalsAddComponent;
  let fixture: ComponentFixture<AnimalsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
