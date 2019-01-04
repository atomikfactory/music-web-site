import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/shared/services/media.service';
import { Picture } from 'src/app/shared/model/media-gallery';
import { MatDialog } from '@angular/material';
import { DialogVideoComponent } from 'src/app/shared/component/dialog/dialog-video.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  _album: Array<Picture>;

  constructor(public dialog: MatDialog, private mediaService: MediaService) { }

  ngOnInit() {
    this.mediaService.getPictureGallery("media/picture", "").subscribe(
      (response) => {
        this._album = response.pictures;

        console.log(this._album);
      },
      err => console.log(err));
  }

  open(index: number): void {

    
    let url: string;

    //tmp todo : grab url from dataset / service | json
    if (index === 1) {
      url = 'https://www.youtube.com/embed/DxaGv4kphi8?rel=0';
    }
    else {
      url = 'https://www.youtube.com/embed/2SfLQ5KBiHU?rel=0';
    }

    const dialogRef = this.dialog.open(DialogVideoComponent, {
      width: '600px',
      data: { videoUrl: url }
    });

  }



}
