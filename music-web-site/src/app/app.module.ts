import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PlatformModule } from '@angular/cdk/platform';

import { LightboxModule } from 'ngx-lightbox';


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
import { NewBlogPostComponent } from './admin/new-blog-post/new-blog-post.component';
import { MediaService } from './shared/services/media.service';


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
    TrackPlayerComponent,
    NewBlogPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ScrollingModule,
    PlatformModule,
    LightboxModule,
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
      { path: 'admin/newpost', component: NewBlogPostComponent },
      { path: '**', component: HomeComponent },
    ])

  ],
  providers: [MusicService, CatalogService, AudioService, MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
