import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class IpAddressService {
    url = `https://geo.ipify.org/api/v2/country,city?apiKey=${environment.ipGeoApiKey}`;
   
    constructor(private http: HttpClient) { }

    getIpAddress(ip: string) {
        return this.http.get(`${this.url}&ipAddress=${ip}`);
    }
}