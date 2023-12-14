import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Highways } from '../models/highways.model';

@Injectable({
  providedIn: 'root',
})
export class HighwaysService {
  apiUrl = environment.apiUrl;
  selectedHighway: string = '';
  private highway$ = new BehaviorSubject<string>('');
  selectedHighway$ = this.highway$.asObservable();

  constructor(private httpClient: HttpClient) {}

  getHighways(): Observable<Highways> {
    return this.httpClient.get<Highways>(`${this.apiUrl}`);
  }

  setSelectedHighway(highway: string): void {
    this.highway$.next(highway);
  }
}
