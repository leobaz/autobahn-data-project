import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { RestAreasResponse } from '../models/rest-areas-response.model';

@Injectable({
  providedIn: 'root',
})
export class RestAreasService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getRestAreas(highwayId: string): Observable<RestAreasResponse> {
    return this.httpClient.get<RestAreasResponse>(
      `${this.apiUrl}/${highwayId}/services/parking_lorry`
    );
  }
}
