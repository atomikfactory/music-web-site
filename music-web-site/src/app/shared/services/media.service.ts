import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MediaGallery } from '../model/media-gallery';


@Injectable({
    providedIn: 'root'
})
export class MediaService {

    private baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) {

    }

    getPictureGallery(url: string, jwt: string): Observable<MediaGallery> {
        if (environment.mockApi)
            return this.getAlbumMock();
        else
            return (this.http.get(`${this.baseUrl}/${url}`, { headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": 'Baerer ' + jwt }) })) as Observable<MediaGallery>;
    }

  private getAlbumMock(): Observable<MediaGallery> {
      return this.http.get("./assets/json/picture-gallery.json") as Observable<MediaGallery>;
    }



}

