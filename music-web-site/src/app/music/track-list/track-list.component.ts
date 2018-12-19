import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/shared/model/track';
import { CatalogService } from 'src/app/shared/services/catalog.service';
import { SearchOption } from 'src/app/shared/model/searchoption';
import { DomSanitizer } from '@angular/platform-browser';
import { CatalogConfig } from 'src/app/shared/config/catalogconfig';
import { Subject, interval } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css'],
  providers: [CatalogConfig]
})
export class TrackListComponent implements OnInit {

  filteredTrackList: Track[];
  trackList: Track[];
  searchBarOptions: SearchOption[];

  searchSubject$ = new Subject<string>();
  searchString: string;


  constructor(private catalogService: CatalogService, private sanitizer: DomSanitizer, private conf: CatalogConfig) { }

  ngOnInit() {
    this.catalogService.getTracks("catalog/", "").subscribe(
      (response) => {
        this.trackList = response;
        this.filteredTrackList = this.trackList

        this.searchBarOptions = new Array<SearchOption>();
        this.setSearchBarOption();

      },
      err => console.log(err));

    this.searchSubject$.pipe(debounceTime(300))
      .subscribe(search => this.filterByAll(search))
      ;
  }

  setSearchBarOption(): void {
    const refArray: string = "abcdefghijklmnopqrstuvwxyz";

    for (var char of refArray) {
      let so = new SearchOption();

      so.enable = this.isOptionEnabled(char);
      so.name = char;
      so.value = char;

      this.searchBarOptions.push(so);
    }
  }

  isOptionEnabled(val: string): boolean {
    return this.trackList.some((track) => track.trackTitle.toLowerCase().startsWith(val));
  }

  onSelectionChange(val: string): void {
    this.filterByName(val);

  }

  inputChanged($event) {
    this.searchSubject$.next($event);
  }

  getTrackWidget(track: Track) {
    return this.sanitizer.bypassSecurityTrustHtml(track.trackLinks.find(t => t.plateform === "Bandcamp").widget);
  }

  private filterByName(val: string): void {
    this.filteredTrackList = this.trackList.filter((track) => track.trackTitle.toLowerCase().startsWith(val));
  }


  private filterByAll(val: string): void {

    let titleFilterLst = this.trackList.filter((track) => track.trackTitle.toLowerCase().includes(val.toLowerCase()));
    let tagFilterLst = this.trackList.filter((track) => track.trackTags.toLowerCase().includes(val.toLowerCase()));
    let mainGenreLst = this.trackList.filter((track) => track.mainGenre !== null && track.mainGenre.toLowerCase().includes(val.toLowerCase()));


    let resultArray = titleFilterLst;

    tagFilterLst.forEach((t) => {
      if (resultArray.some(i => i.id === t.id) === false) {
        resultArray.push(t);
      }
    });

    mainGenreLst.forEach((t) => {
      if (resultArray.some(i => i.id === t.id) === false) {
        resultArray.push(t);
      }
    });

    this.filteredTrackList = resultArray;

  }

  ngOnDestroy() {
    try {
      this.searchSubject$.unsubscribe();
    }
    catch (err) {

    }

  }
}
