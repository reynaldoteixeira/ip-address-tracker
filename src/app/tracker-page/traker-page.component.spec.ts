import { TestBed } from '@angular/core/testing';
import { TrackerPageComponent } from './tracker-page.component';

describe('TrackerPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TrackerPageComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TrackerPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});