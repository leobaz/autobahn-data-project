import { Component } from '@angular/core';
import { CurrentSuspensionsService } from '../../../../core/services/current-suspensions.service';
import { HighwaysService } from '../../../../core/services/highways.service';
import { Road } from '../../../../shared/models/road.model';
import { ErrorService } from '../../../../shared/services/error.service';

@Component({
  selector: 'app-current-suspensions-map',
  templateUrl: './current-suspensions-map.component.html',
  styleUrl: './current-suspensions-map.component.scss',
})
export class CurrentSuspensionsMapComponent {
  markerDetails: Road[] = [];

  constructor(
    private currentSuspensionsService: CurrentSuspensionsService,
    private highwaysService: HighwaysService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.highwaysService.selectedHighway$.subscribe((highway) => {
      this.currentSuspensionsService.getCurrentSuspensions(highway).subscribe({
        next: (data) => {
          if (data.closure.length > 0) {
            this.markerDetails = [...data.closure];
          }
        },
        error: () => {
          this.errorService.showErrorSnackBar(
            'There was an error loading the current suspensions.'
          );
        },
      });
    });
  }
}
