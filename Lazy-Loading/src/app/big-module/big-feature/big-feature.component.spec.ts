import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigFeatureComponent } from './big-feature.component';

describe('BigFeatureComponent', () => {
  let component: BigFeatureComponent;
  let fixture: ComponentFixture<BigFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
