import { Component } from '@angular/core';
import { MenuActionService } from '../Services/menu-action.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
constructor(public menuActionService: MenuActionService){}

isShowDivIf = true;
toggleDisplayDivIf() {
  this.isShowDivIf = !this.isShowDivIf;
}
}
