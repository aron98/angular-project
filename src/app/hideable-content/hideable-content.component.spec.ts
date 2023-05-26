import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideableContentComponent } from './hideable-content.component';

describe('HideableContentComponent', () => {
  let component: HideableContentComponent;
  let fixture: ComponentFixture<HideableContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HideableContentComponent]
    });
    fixture = TestBed.createComponent(HideableContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
