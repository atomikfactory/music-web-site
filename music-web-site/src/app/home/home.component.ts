import { Component, OnDestroy, Renderer2, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public intervallTimer = interval(10000);
  private subscription;
  private currentImg = 0;

  private imgs: string[] = ["/assets/images/home/pexels-photo-145707.jpeg",
    "/assets/images/home/pianoInstrument.jpg",
    "/assets/images/home/mixTable.jpg",
    "/assets/images/home/PionerController.jpg"];

  constructor(private renderer: Renderer2) {

  }

  ngOnInit(): void {
    //emit value in sequence every 1 second
    //this.renderer.setStyle(document.body, 'background-image', 'url("https://cache.desktopnexus.com/cropped-wallpapers/263/263726-1920x1080-[DesktopNexus.com].jpg?st=1UYJy_5R4Yv-uMv19O7TjA&e=1543016791")');

    this.subscription = this.intervallTimer.subscribe(() => this.LoadImage());


  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  private LoadImage() {

    this.currentImg++;
    if (this.currentImg > this.imgs.length - 1) {
      this.currentImg = 0;
    }

    let newImage = this.imgs[this.currentImg];

    this.renderer.addClass(document.body, 'full');
    this.renderer.setStyle(document.body, 'background-image', 'url("' + newImage + '")');

    console.log(newImage);
  }
}
