import {
  afterNextRender,
  Component,
  inject,
  signal,
  resource,
  computed,
} from '@angular/core';
import { GoogleMap, MapAdvancedMarker } from '@angular/google-maps';
import { LocationService } from '@shared/services/location.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location',
  imports: [GoogleMap, MapAdvancedMarker, CommonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css',
})
export default class LocationComponent {
  locationService = inject(LocationService);
  origin = signal<{ lat: number; lng: number }>({ lat: 0, lng: 0 });
  locations = resource({
    params: () => ({ orgin: this.origin() }),
    loader: ({ params }) => this.locationService.getLocations(params),
  });
  center = computed<google.maps.LatLngLiteral>(() => this.origin());
  zoom = signal(15);

  constructor() {
    afterNextRender(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        this.origin.set({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    });
  }
}
