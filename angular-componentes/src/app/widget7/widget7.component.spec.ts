import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget7Component } from './widget7.component';

describe('Widget7Component', () => {
  let component: Widget7Component;
  let fixture: ComponentFixture<Widget7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Widget7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Widget7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
