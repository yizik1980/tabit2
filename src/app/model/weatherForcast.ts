import { Current, LocationSite, RequestApiUx } from "./request";

export interface weatherForcast {
    request: RequestApiUx;
    location: LocationSite;
    current: Current;
}