import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from '../model/album';


@Injectable({
    providedIn: 'root'
})
export class MusicService {

    private baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) {

    }

    getAlbum(url: string, jwt: string): Observable<Album[]> {
        if (environment.mockApi)
            return this.getAlbumMock();
        else
            return (this.http.get(`${this.baseUrl}/${url}`, { headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": 'Baerer ' + jwt }) })) as Observable<Album[]>;
    }

    private getAlbumMock(): Observable<Album[]> {
        return this.http.get("./assets/json/album.json") as Observable<Album[]>;
    }



}

