import { Component } from '@angular/core';
import { PanelService } from './panel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-training';
  public color = 'black'
  public colors = ['black', 'red', 'blue'];
  public somename = 'yellow'

  public panelClicked(): void {
    this.color = this.color === 'black' ? 'red' : 'black'
  }
}
