import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget8Component } from './widget8.component';

describe('Widget8Component', () => {
  let component: Widget8Component;
  let fixture: ComponentFixture<Widget8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Widget8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Widget8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
