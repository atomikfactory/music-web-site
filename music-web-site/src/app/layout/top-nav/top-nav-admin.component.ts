import { Component, OnInit } from '@angular/core';
import { ArtistConfig } from 'src/app/shared/config/artistconfig';


@Component({
  selector: 'app-top-nav-admin',
  templateUrl: './top-nav-admin.component.html',
  providers: [ArtistConfig]

})
export class TopNavAdminComponent implements OnInit {

  constructor(private conf: ArtistConfig) {

  }

  ngOnInit() {
   
  }

}
