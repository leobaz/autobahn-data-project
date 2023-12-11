import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HighwaysService } from '../../../../core/services/highways.service';
import { Highways } from '../../../../shared/models/highways.model';
import { ErrorService } from '../../../../shared/services/error.service';

@Component({
  selector: 'app-highways',
  templateUrl: './highways.component.html',
  styleUrl: './highways.component.scss',
})
export class HighwaysComponent implements OnInit, OnDestroy {
  highways?: Highways;
  sub: Subscription = new Subscription();

  constructor(
    private highwaysService: HighwaysService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.getAllAvailableHighways();
  }

  getAllAvailableHighways(): void {
    this.sub = this.highwaysService.getHighways().subscribe({
      next: (data) => {
        this.highways = data;
      },
      error: () => {
        this.errorService.showErrorSnackBar(
          'There was an error loading the highways.'
        );
      },
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
