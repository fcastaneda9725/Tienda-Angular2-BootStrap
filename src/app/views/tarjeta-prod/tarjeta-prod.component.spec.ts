import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaProdComponent } from './tarjeta-prod.component';

describe('TarjetaProdComponent', () => {
  let component: TarjetaProdComponent;
  let fixture: ComponentFixture<TarjetaProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
