import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProductStatsComponent } from './top-product-stats.component';

describe('TopProductStatsComponent', () => {
  let component: TopProductStatsComponent;
  let fixture: ComponentFixture<TopProductStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopProductStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopProductStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
