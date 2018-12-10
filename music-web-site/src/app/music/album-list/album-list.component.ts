import { Component, OnInit, Renderer2 } from '@angular/core';
import { Album } from '../../Shared/Model/Album';
import { MusicService } from 'src/app/shared/model/services/music.service';


@Component({
    selector: 'app-album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

    albumList: Album[]

    constructor(private api: MusicService, private renderer: Renderer2) {

        this.renderer.addClass(document.body, 'atomik-bg');
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
