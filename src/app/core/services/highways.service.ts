import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Highways } from '../../shared/models/highways.model';

@Injectable({
  providedIn: 'root',
})
export class HighwaysService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getHighways(): Observable<Highways> {
    return this.httpClient.get<Highways>(`${this.apiUrl}`);
  }
}
