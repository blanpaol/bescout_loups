import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaingungaComponent } from './waingunga.component';

describe('WaingungaComponent', () => {
  let component: WaingungaComponent;
  let fixture: ComponentFixture<WaingungaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaingungaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaingungaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
