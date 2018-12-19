import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AudioService {


  private audio: any;

  public currentTime: Subject<number> = new Subject<number>();
  public fullTime: Subject<number> = new Subject<number>();
  public audioFile: Subject<string> = new Subject<string>();

  audioFileName: string;

  constructor() {
    this.audio = new Audio();
  }

  setPlayer(audioFileName: string) {

    this.audioFileName = audioFileName;

    this.audio.src = audioFileName;

    this.audio.oncanplaythrough = () => {
      this.audio.play();
      this.fullTime.next(this.audio.duration);
      this.audioFile.next(audioFileName);
      console.log(audioFileName);
    };

    this.audio.ontimeupdate = () => {
      this.currentTime.next((this.audio.currentTime * 100) / this.audio.duration);
    };

  }

  setTrackPosition(progress: number): any {
    try {
      let audioPosition = (progress * this.audio.duration) / 100;
      this.audio.currentTime = audioPosition;
    }
    catch{
      this.audio.currentTime = 0;
    }
  }

  toggleAudio() {
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }

    return this.audio.paused;
  }

  getCurrentAudioFileName(): string {
    return this.audioFileName;
  }


}
