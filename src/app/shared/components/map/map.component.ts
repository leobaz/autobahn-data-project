import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { CoreModule } from '../../../core/core.module';
import { featureIcons } from '../../../modules/highway-details/feature-icons';
import { FeatureIcons } from '../../models/feature-icon.model';
import { Road } from '../../models/road.model';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CoreModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements AfterViewInit, OnDestroy, OnChanges {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  @ViewChild(GoogleMap) map!: any;
  @Input() center: google.maps.LatLngLiteral = {
    lat: 52,
    lng: 11,
  };
  @Input() zoom = 8;
  @Input() markerDetails: Road[] = [];
  @Input() width = '100%';
  @Input() height = '500px';

  display: any;
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };

  timeout: any;
  selectedMarker: Road | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['center'] && this.map) {
      this.map.googleMap.setCenter(this.center);
    }
  }

  ngAfterViewInit(): void {
    this.timeout = setTimeout(() => {
      if (this.markerDetails.length > 0) {
        this.getBounds(this.markerDetails);
      } else {
        this.map.googleMap.setCenter(this.center);
      }
    }, 1000);
  }

  moveMap(event: google.maps.MapMouseEvent): void {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }
  move(event: google.maps.MapMouseEvent): void {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  getBounds(markers: Road[]): void {
    let bounds = new google.maps.LatLngBounds();
    markers.forEach((marker: Road) => {
      bounds.extend(
        new google.maps.LatLng(+marker.coordinate.lat, +marker.coordinate.long)
      );
    });

    this.map.googleMap.fitBounds(bounds);
  }

  openInfoWindow(marker: MapMarker, markerDetail: Road): void {
    if (this.infoWindow != undefined) {
      this.selectedMarker = { ...markerDetail };
      this.infoWindow.open(marker);
    }
  }

  getIconName(parkingFeatureIcon: FeatureIcons): string {
    return (
      featureIcons.find((icon) => icon.iconName === parkingFeatureIcon.icon)
        ?.matIcon || ''
    );
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeout);
  }
}
