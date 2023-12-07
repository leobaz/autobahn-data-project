import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ConstructionSitesResponse } from '../../shared/models/construction-sites-response.model';

@Injectable({
  providedIn: 'root',
})
export class ConstructionSitesService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getHighwayConstructionSites(
    highwayId: string
  ): Observable<ConstructionSitesResponse> {
    return this.httpClient.get<ConstructionSitesResponse>(
      `${this.apiUrl}/${highwayId}/services/roadworks`
    );
  }
}
