import { Component, OnInit } from '@angular/core';
import { ArtistConfig } from 'src/app/shared/config/artistconfig';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  providers: [ArtistConfig]

})
export class TopNavComponent implements OnInit {

  constructor(private conf: ArtistConfig) { }

  ngOnInit() {
    
  }

}
