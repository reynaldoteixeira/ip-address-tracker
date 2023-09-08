import { AfterViewInit, Component, OnInit } from "@angular/core";
import * as L from 'leaflet';
import { IpAddressService } from "../services/ipAdress.service";

@Component({
  selector: 'app-track-page',
  templateUrl: 'tracker-page.component.html',
  styleUrls: ['tracker-page.component.scss']
})
export class TrackerPageComponent implements OnInit, AfterViewInit {
  private map!: L.Map
  public markers: L.Marker[] = [
    L.marker([-23.533773, -46.625290]), // SP
  ];

  public ipAddressTyped:string = '';

  constructor(
    private ipAddressService: IpAddressService
  ) { }

  ngOnInit(): void {
    this.initializeMap();
    this.addMarkers();
    this.centerMap();
  }

  ngAfterViewInit(): void { }


  private initializeMap() {
    const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    this.map = L.map('map');
    L.tileLayer(baseMapURl).addTo(this.map);

  }

  private addMarkers() {
    this.markers.forEach(marker => marker.addTo(this.map));
  }

  private centerMap() {
    const bounds = L.latLngBounds(this.markers.map(marker => marker.getLatLng()));
    this.map.fitBounds(bounds);
  }

  setIpAddress(event) {
    this.ipAddressTyped = event.target.value;
  }

  getIpAddress() {
    this.ipAddressService.getIpAddress(this.ipAddressTyped).subscribe(addressResponse => {
      this.map.setView([addressResponse['location'].lat, addressResponse['location'].lng]);
      L.marker(L.latLng(addressResponse['location'].lat, addressResponse['location'].lng)).addTo(this.map);
    });
  }
}