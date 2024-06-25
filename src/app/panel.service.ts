import { Injectable } from "@angular/core";

@Injectable()
export class PanelService {
    public log(): void {
        console.log('log');
    }
}