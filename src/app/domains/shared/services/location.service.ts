import { Injectable } from '@angular/core';
import { environment } from '@evn/environment';
import { StoreLocation } from '@shared/models/location/location.model';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  async getLocations(params: {
    orgin?: { lat: number; lng: number };
  }): Promise<StoreLocation[]> {
    const url = new URL(`${environment.apiUrl}/api/v1/locations`);
    if (params.orgin) {
      url.searchParams.set('orgin', `${params.orgin.lat},${params.orgin.lng}`);
    }
    const response = await fetch(url.toString());
    const data = await response.json();

    return data;
  }
}
