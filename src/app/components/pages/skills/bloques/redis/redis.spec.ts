import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Redis } from './redis';

describe('Redis', () => {
  let component: Redis;
  let fixture: ComponentFixture<Redis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Redis],
    }).compileComponents();

    fixture = TestBed.createComponent(Redis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
