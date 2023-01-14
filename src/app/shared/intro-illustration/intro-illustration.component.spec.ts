import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroIllustrationComponent } from './intro-illustration.component';

describe('IntroIllustrationComponent', () => {
  let component: IntroIllustrationComponent;
  let fixture: ComponentFixture<IntroIllustrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroIllustrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
