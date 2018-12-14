import { Component, OnInit } from '@angular/core';
import { ArtistConfig } from 'src/app/shared/config/artistconfig';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ArtistConfig]
})
export class FooterComponent implements OnInit {

  year: number;

  constructor(public conf: ArtistConfig) {
    this.year = (new Date()).getFullYear();
  }

  ngOnInit() {


  }

}
