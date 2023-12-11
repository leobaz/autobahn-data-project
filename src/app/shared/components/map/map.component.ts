import { Component, Input } from '@angular/core';
import { CoreModule } from '../../../core/core.module';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CoreModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent {
  @Input() center: google.maps.LatLngLiteral = {
    lat: 52,
    lng: 11,
  };
  @Input() zoom = 8;
  @Input() markerPositions: google.maps.LatLngLiteral[] = [];
  @Input() width = '100%';
  @Input() height = '500px';

  display: any;
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
