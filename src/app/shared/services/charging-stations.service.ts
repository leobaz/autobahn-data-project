import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ChargingStationsResponse } from '../models/charging-stations-response.model';

@Injectable({
  providedIn: 'root',
})
export class ChargingStationsService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getChargingStations(highwayId: string): Observable<ChargingStationsResponse> {
    return this.httpClient.get<ChargingStationsResponse>(
      `${this.apiUrl}/${highwayId}/services/electric_charging_stations`
    );
  }
}
