import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Road } from '../../../../shared/models/road.model';

@Component({
  selector: 'app-construction-site-details',
  templateUrl: './construction-site-details.component.html',
  styleUrl: './construction-site-details.component.scss',
})
export class ConstructionSiteDetailsComponent implements OnChanges {
  @Input() constructionSite!: Road;
  center: google.maps.LatLngLiteral = {
    lat: 52,
    lng: 11,
  };
  zoom = 12;

  ngOnChanges(changes: SimpleChanges): void {
    this.center = {
      lat: +this.constructionSite?.coordinate.lat,
      lng: +this.constructionSite?.coordinate.long,
    };
    document.getElementById('scrollTarget')!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
