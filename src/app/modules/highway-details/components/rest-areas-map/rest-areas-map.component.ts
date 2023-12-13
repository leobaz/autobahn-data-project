import { Component, OnInit } from '@angular/core';
import { HighwaysService } from '../../../../core/services/highways.service';
import { RestAreasService } from '../../../../core/services/rest-areas.service';
import { Road } from '../../../../shared/models/road.model';
import { ErrorService } from '../../../../shared/services/error.service';

@Component({
  selector: 'app-rest-areas-map',
  templateUrl: './rest-areas-map.component.html',
  styleUrl: './rest-areas-map.component.scss',
})
export class RestAreasMapComponent implements OnInit {
  markerDetails: Road[] = [];

  constructor(
    private restAreasService: RestAreasService,
    private highwaysService: HighwaysService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.highwaysService.selectedHighway$.subscribe((highway) => {
      this.restAreasService.getRestAreas(highway).subscribe({
        next: (data) => {
          if (data.parking_lorry.length > 0) {
            this.markerDetails = [...data.parking_lorry];
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
