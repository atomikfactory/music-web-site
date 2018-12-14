import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { FooterComponent } from './layout/footer/footer.component';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ConnectComponent } from './connect/connect.component';
import { VideoComponent } from './media/video/video.component';
import { PictureComponent } from './media/picture/picture.component';
import { PostsListComponent } from './blog/posts-list/posts-list.component';
import { MusicCatalogComponent } from './music/music-catalog/music-catalog.component';
import { AlbumListComponent } from './music/album-list/album-list.component';
import { MusicService } from './shared/services/music.service';
import { DownloadComponent } from './download/download.component';
import { TrackListComponent } from './music/track-list/track-list.component';
import { CatalogService } from './shared/services/catalog.service';
import { AudioService } from './shared/services/audio.service';
import { TrackPlayerComponent } from './music/track-player/track-player.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    FooterComponent,
    AlbumListComponent,
    MusicCatalogComponent,
    PostsListComponent,
    VideoComponent,
    PictureComponent,
    DownloadComponent,
    ContactComponent,
    ConnectComponent,
    TrackListComponent,
    TrackPlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'music/album', component: AlbumListComponent },
      { path: 'music/stockmusic', component: MusicCatalogComponent },
      { path: 'blog', component: PostsListComponent },
      { path: 'download', component: DownloadComponent },
      { path: 'media/picture', component: PictureComponent },
      { path: 'media/video', component: VideoComponent },
      { path: 'connect', component: ConnectComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', component: HomeComponent },
    ])
    
  ],
  providers: [MusicService, CatalogService, AudioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
