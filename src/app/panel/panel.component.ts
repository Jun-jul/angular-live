import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PanelService } from "../panel.service";

@Component({
    selector: 'panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
    @Input() public color: string = 'black';
    @Output() public panelClicked = new EventEmitter<void>();

    public bigSize = true;
    public boolean = false;
}