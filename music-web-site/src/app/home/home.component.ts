import { Component, OnDestroy,  OnInit } from '@angular/core';
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

  public currentImgPath: string;

  private imgs: string[] = ["/assets/images/home/pexels-photo-145707.jpeg",
    "/assets/images/home/pianoInstrument.jpg",
    "/assets/images/home/mixTable.jpg",
    "/assets/images/home/PionerController.jpg"];

  constructor() {

  }

  ngOnInit(): void {
    this.currentImgPath = this.imgs[0];

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

    this.currentImgPath = this.imgs[this.currentImg];
  }
}
