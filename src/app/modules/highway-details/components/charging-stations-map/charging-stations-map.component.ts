import { Component } from '@angular/core';
import { Road } from '../../../../shared/models/road.model';
import { ChargingStationsService } from '../../../../shared/services/charging-stations.service';
import { ErrorService } from '../../../../shared/services/error.service';
import { HighwaysService } from '../../../../shared/services/highways.service';

@Component({
  selector: 'app-charging-stations-map',
  templateUrl: './charging-stations-map.component.html',
  styleUrl: './charging-stations-map.component.scss',
})
export class ChargingStationsMapComponent {
  markerDetails: Road[] = [];

  constructor(
    private chargingStationsService: ChargingStationsService,
    private highwaysService: HighwaysService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.highwaysService.selectedHighway$.subscribe((highway) => {
      this.chargingStationsService.getChargingStations(highway).subscribe({
        next: (data) => {
          if (data.electric_charging_stations.length > 0) {
            this.markerDetails = [...data.electric_charging_stations];
          }
        },
        error: () => {
          this.errorService.showErrorSnackBar(
            'There was an error loading the charging stations.'
          );
        },
      });
    });
  }
}
