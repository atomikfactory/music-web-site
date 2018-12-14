import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Track } from '../model/track';



@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {

  }

  getTracks(url: string, jwt: string): Observable<Track[]> {
    if (environment.mockApi)
      return this.getTracksMock();
    else
      return (this.http.get(`${this.baseUrl}/${url}`, { headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": 'Baerer ' + jwt }) })) as Observable<Track[]>;
  }

  private getTracksMock(): Observable<Track[]> {
    return this.http.get("./assets/json/catalog.json") as Observable<Track[]>;
  }



}

