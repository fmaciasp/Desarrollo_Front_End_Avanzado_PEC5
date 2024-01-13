import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wine } from '../components/models/wine.interface';

@Injectable({
  providedIn: 'root'
})
export class WinesService {

  constructor(private http: HttpClient) { }

  getAllWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>('https://api.sampleapis.com/wines/reds');
  }

  getWineById(id: String): Observable<Wine> {
    return this.http.get<Wine>('https://api.sampleapis.com/wines/reds/'+id);
  }
}
