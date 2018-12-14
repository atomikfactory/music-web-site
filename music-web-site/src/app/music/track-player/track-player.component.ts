import { Component, OnInit, Input } from '@angular/core';
import { Track } from 'src/app/shared/model/track';
import { AudioService } from 'src/app/shared/services/audio.service';

@Component({
  selector: 'app-track-player',
  templateUrl: './track-player.component.html',
  styleUrls: ['./track-player.component.css']
})
export class TrackPlayerComponent implements OnInit {
  @Input() track: Track;

  private fullTime: number;
  private currentTime: number;
  private progressPercent: number;
  private isPlaying: boolean;
  // Subscription variables
  private currentTimeSubscription: any;
  private fullTimeSubscription: any;

  private currentPlayTrack: any;

  constructor(private audioService: AudioService) { }

  ngOnInit() {

    this.currentTimeSubscription = this.audioService.currentTime.subscribe(data => {
      if (this.audioService.getCurrentAudioFileName() === this.track.physicalFilePath) {
        this.progressPercent = data;
      }
      else {
        this.progressPercent = 1;
      }
    });
  }

  play(event) {

    if (this.audioService.getCurrentAudioFileName() !== this.track.physicalFilePath) {
      debugger;
      this.audioService.setPlayer(this.track.physicalFilePath);

    }

    this.getTrackPosition(event);

  }

  getTrackPosition(e) {

    var el = document.getElementById('container' + this.track.id);
    var rect = el.getBoundingClientRect();

    var xMouse = e.clientX;

    ////get track pos in %
    var progress = (xMouse - rect.left) * 100 / (rect.right - rect.left);

    this.audioService.setTrackPosition(progress);
  }

  toggleAudio() {
    this.isPlaying = this.audioService.toggleAudio();
  }

  getImgWave(): string {
    return 'assets/library/ready/' + this.track.player.waveImg;
  }

  getContainerId(): string {
    return 'container' + this.track.id;
  }

  ngOnDestroy() {
    try {
      this.currentTimeSubscription.unsubscribe();
      this.fullTimeSubscription.unsubscribe();
    }
    catch{

    }
  }

}
