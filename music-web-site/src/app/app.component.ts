import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  isAdmin: boolean = false;
  title = 'Music Web Site';

  constructor(private router: Router) {
    router.events.subscribe((url: any) => {
      if (router.url.indexOf('admin/') !== -1) { this.isAdmin = true; } else { this.isAdmin = false; }
    });

  }
}
