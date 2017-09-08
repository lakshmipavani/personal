import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattedPageComponent } from './formatted-page.component';

describe('FormattedPageComponent', () => {
  let component: FormattedPageComponent;
  let fixture: ComponentFixture<FormattedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormattedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormattedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
