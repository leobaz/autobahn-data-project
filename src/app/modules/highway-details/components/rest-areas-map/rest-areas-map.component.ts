import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Road } from '../../../../shared/models/road.model';
import { ErrorService } from '../../../../shared/services/error.service';
import { HighwaysService } from '../../../../shared/services/highways.service';
import { RestAreasService } from '../../../../shared/services/rest-areas.service';

@Component({
  selector: 'app-rest-areas-map',
  templateUrl: './rest-areas-map.component.html',
  styleUrl: './rest-areas-map.component.scss',
})
export class RestAreasMapComponent implements OnInit, OnDestroy {
  markerDetails: Road[] = [];
  private sub: Subscription = new Subscription();

  constructor(
    private restAreasService: RestAreasService,
    private highwaysService: HighwaysService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.highwaysService.selectedHighway$.subscribe((highway) => {
      this.getRestAreas(highway);
    });
  }

  getRestAreas(highway: string): void {
    this.sub = this.restAreasService.getRestAreas(highway).subscribe({
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
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
