import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { YoutubeService } from '../services/youtube.service';


@Component({
  selector: 'app-video-lista',
  templateUrl: './video-lista.component.html',
  styleUrls: ['./video-lista.component.css']
})
export class VideoListaComponent implements OnInit {
  videos: any[] = [];

  constructor(private ytService:YoutubeService) {

   }

  ngOnInit(): void {

    this.ytService.getVideosForChanel('UC6nSFpj9HTCZ5t-N3Rm3-HA', 5).subscribe((data:any)=>{
     
      this.videos = data.items;
    });
    

  }

}
