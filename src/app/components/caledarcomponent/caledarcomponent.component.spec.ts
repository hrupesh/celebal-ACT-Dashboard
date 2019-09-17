import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaledarcomponentComponent } from './caledarcomponent.component';

describe('CaledarcomponentComponent', () => {
  let component: CaledarcomponentComponent;
  let fixture: ComponentFixture<CaledarcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaledarcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaledarcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
