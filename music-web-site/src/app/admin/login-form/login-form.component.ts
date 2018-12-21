import { Component, OnInit } from '@angular/core';
import { ArtistConfig } from 'src/app/shared/config/artistconfig';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [ArtistConfig]
})
export class LoginFormComponent implements OnInit {

  constructor(private conf: ArtistConfig) { }

  ngOnInit() {
  }

}
