import { ComponentFixture, TestBed } from '@angular/core/testing';

import { K8s } from './k8s';

describe('K8s', () => {
  let component: K8s;
  let fixture: ComponentFixture<K8s>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [K8s],
    }).compileComponents();

    fixture = TestBed.createComponent(K8s);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
