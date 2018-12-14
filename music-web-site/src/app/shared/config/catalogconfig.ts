import { Injectable } from "@angular/core";

@Injectable()
export class CatalogConfig {
  selfHost: boolean = false; //if true : we ll use home made player & host & access physical music files
  defaultPlayer: string = "Bandcamp"; // Should match a trackLinks.plateform 

}

