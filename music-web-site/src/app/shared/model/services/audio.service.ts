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

    let srcFile = 'https://ia802508.us.archive.org/5/items/testmp3testfile/mpthreetest.mp3';


    this.audio.src = '/assets/library/ready/' + audioFileName;  //srcFile;

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
    let audioPosition = (progress * this.audio.duration) / 100;
    this.audio.currentTime = audioPosition;
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
