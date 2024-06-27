import { Component } from '@angular/core';
import { PanelService } from './panel.service';
import { Router } from '@angular/router';

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

  public constructor (private readonly panelService: PanelService, private readonly router: Router){}

  public panelClicked(): void {
    this.color = this.color === 'black' ? 'red' : 'black'
    this.panelService.log();
    // this.router.navigateByUrl('first')
    // this.router.navigate(['first'])
  }
}
