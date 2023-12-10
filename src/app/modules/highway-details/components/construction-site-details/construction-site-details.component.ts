import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ConstructionSite } from '../../../../shared/models/construction-site.model';

@Component({
  selector: 'app-construction-site-details',
  templateUrl: './construction-site-details.component.html',
  styleUrl: './construction-site-details.component.scss',
})
export class ConstructionSiteDetailsComponent implements OnChanges {
  @Input() constructionSite!: ConstructionSite;
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
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

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
