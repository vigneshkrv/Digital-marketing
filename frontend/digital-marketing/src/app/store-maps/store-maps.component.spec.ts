import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMapsComponent } from './store-maps.component';

describe('StoreMapsComponent', () => {
  let component: StoreMapsComponent;
  let fixture: ComponentFixture<StoreMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
