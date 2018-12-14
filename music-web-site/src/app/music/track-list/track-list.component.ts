import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/shared/model/track';
import { CatalogService } from 'src/app/shared/model/services/catalog.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  trackList: Track[];

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.catalogService.getTracks("catalog/", "").subscribe(
      response => {
        this.trackList = response;

        console.log(this, this.trackList);

      },
      err => console.log(err));
  }

}
