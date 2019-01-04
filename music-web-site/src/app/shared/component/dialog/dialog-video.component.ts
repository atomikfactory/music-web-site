import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { sanitizeHtml } from '@angular/core/src/sanitization/sanitization';


@Component({
  selector: 'app-dialog-video',
  templateUrl: './dialog-video.component.html'
})
export class DialogVideoComponent implements OnInit {

  _videoUrl: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

  }

  getMovieUrl(): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.data.videoUrl);
  }

}
