import { Component, OnInit } from '@angular/core';
import { ArtistConfig } from '../shared/model/artistconfig';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
  providers: [ArtistConfig]
})
export class ConnectComponent implements OnInit {



  constructor(public conf: ArtistConfig, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    
  }

  getSpotifyWidgetUrl(): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.conf.spotifyWidget);
  }

}
