import { Component, OnInit } from '@angular/core';
import { HighwaysService } from '../../../../core/services/highways.service';
import { RestAreasService } from '../../../../core/services/rest-areas.service';
import { ErrorService } from '../../../../shared/services/error.service';

@Component({
  selector: 'app-rest-areas-map',
  templateUrl: './rest-areas-map.component.html',
  styleUrl: './rest-areas-map.component.scss',
})
export class RestAreasMapComponent implements OnInit {
  center: google.maps.LatLngLiteral = {
    lat: 52,
    lng: 11,
  };
  markerPositions: google.maps.LatLngLiteral[] = [];

  constructor(
    private restAreasService: RestAreasService,
    private highwaysService: HighwaysService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.highwaysService.selectedHighway$.subscribe((highway) => {
      this.restAreasService.getRestAreas(highway).subscribe({
        next: (data) => {
          console.log(data);
          if (data.parking_lorry.length > 0) {
            this.center = {
              lat: +data?.parking_lorry[0].coordinate.lat,
              lng: +data?.parking_lorry[0].coordinate.long,
            };
            data.parking_lorry.forEach((element) => {
              this.markerPositions.push({
                lat: +element.coordinate.lat,
                lng: +element.coordinate.long,
              });
            });
          }
        },
        error: () => {
          this.errorService.showErrorSnackBar(
            'There was an error loading the rest areas.'
          );
        },
      });
    });
  }
}
