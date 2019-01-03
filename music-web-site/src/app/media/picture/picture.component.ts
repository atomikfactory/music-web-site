import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';
import { MediaService } from 'src/app/shared/services/media.service';
import { Picture } from 'src/app/shared/model/media-gallery';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  _album: Array<Picture>;


  constructor(private mediaService: MediaService, private _lightBox: Lightbox, private _lightBoxConfig: LightboxConfig) { _lightBoxConfig.fadeDuration = 1; }

  ngOnInit() {

    this.mediaService.getPictureGallery("media/picture", "").subscribe(
      (response) => {
        this._album = response.pictures;

        console.log(this._album);
      },
      err => console.log(err));


  }

  open(index: number): void {
    // open lightbox
    this._lightBox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightBox.close();
  }



}
