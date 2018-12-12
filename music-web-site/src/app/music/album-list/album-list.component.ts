import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/shared/model/services/music.service';
import { Album } from 'src/app/shared/model/album';


@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albumList: Album[]

  constructor(private api: MusicService) {

  }

  ngOnInit() {
    this.api.getAlbum("music/", "").subscribe(
      response => { 
        this.albumList = response;

        console.log(this.albumList);

      },
      err => console.log(err));
  }

}
