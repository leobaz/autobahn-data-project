import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HighwaysService } from '../../../../core/services/highways.service';

@Component({
  selector: 'app-highway-details',
  templateUrl: './highway-details.component.html',
  styleUrl: './highway-details.component.scss',
})
export class HighwayDetailsComponent implements OnInit, OnDestroy {
  highway = '';
  private sub: Subscription = new Subscription();

  constructor(
    private highwaysService: HighwaysService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.highway = params['highwayId'];
      this.highwaysService.setSelectedHighway(this.highway!);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
