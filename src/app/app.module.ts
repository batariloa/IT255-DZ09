import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoListaComponent } from './components/video-lista/video-lista.component';
import { YoutubeService } from './components/services/youtube.service';

@NgModule({
  declarations: [
    AppComponent, VideoListaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
