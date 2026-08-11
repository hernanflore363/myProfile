import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Golang } from './golang';

describe('Golang', () => {
  let component: Golang;
  let fixture: ComponentFixture<Golang>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Golang],
    }).compileComponents();

    fixture = TestBed.createComponent(Golang);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
