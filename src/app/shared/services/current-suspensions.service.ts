import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CurrentSuspensionsResponse } from '../models/current-suspensions-response.model';

@Injectable({
  providedIn: 'root',
})
export class CurrentSuspensionsService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getCurrentSuspensions(
    highwayId: string
  ): Observable<CurrentSuspensionsResponse> {
    return this.httpClient.get<CurrentSuspensionsResponse>(
      `${this.apiUrl}/${highwayId}/services/closure`
    );
  }
}
