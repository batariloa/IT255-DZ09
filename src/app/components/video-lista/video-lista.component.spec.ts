import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListaComponent } from './video-lista.component';

describe('VideoListaComponent', () => {
  let component: VideoListaComponent;
  let fixture: ComponentFixture<VideoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
