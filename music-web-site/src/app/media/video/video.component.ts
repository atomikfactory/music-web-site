import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/shared/services/media.service';
import { Picture } from 'src/app/shared/model/media-gallery';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  _album: Array<Picture>;

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    this.mediaService.getPictureGallery("media/picture", "").subscribe(
      (response) => {
        this._album = response.pictures;

        console.log(this._album);
      },
      err => console.log(err));
  }

  open(index: number): void {


  }

  close(): void {


  }

}
