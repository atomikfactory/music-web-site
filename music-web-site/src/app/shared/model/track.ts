export class Track {
  id: number;
  trackTitle: string;
  parentTrackId: number;
  mainGenre: string;
  trackLenght: string;
  trackAlbumNumber: number;
  trackDescription: string;
  trackTags: string;
  trackTagsFull: string;
  urlTitle: string;
  trackCover: string;
  releaseDate: Date;
  physicalFilePath: string;
  BPM: number;
  player: TrackPlayer;
  libraries: TrackLibrary[];
  registration: TrackRegistration;
  trackLinks: TrackLink[];
}

export class TrackPlayer {
  waveImg: string;
  counter: number;
}

export class TrackLibrary {
  libraryName: string;
  trackTitleLibrary: string;
  libraryTrackId: number;
  librarytrackStatus: string;
}

export class TrackRegistration {
  IRCSCode: string;
  SOCANWorkNumber: number;
  SOCANISWC: string;
}

export class TrackLink {
  plateform: string;
  link: string;
  widget: string;
}
