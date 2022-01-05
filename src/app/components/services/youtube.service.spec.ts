import { TestBed } from '@angular/core/testing';

import { YoutubeService } from './youtube.service';

describe('YoutubeService', () => {
  let service: YoutubeService;
  let apiKey:string;

  beforeEach(() => {
    apiKey = 'AIzaSyDLO_uvOVgRuarj8EwMbnvZV_NEdzyCDgU';
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeService);
  });


  it('#getObservableValue should return value from observable',
  (done: DoneFn) => {
  service.getVideosForChanel(apiKey,100).subscribe(value => {
    expect(value).toBe('observable value');
    done();
  });
});
});
