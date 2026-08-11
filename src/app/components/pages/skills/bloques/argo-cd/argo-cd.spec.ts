import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgoCd } from './argo-cd';

describe('ArgoCd', () => {
  let component: ArgoCd;
  let fixture: ComponentFixture<ArgoCd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArgoCd],
    }).compileComponents();

    fixture = TestBed.createComponent(ArgoCd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
