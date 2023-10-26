import { Component } from '@angular/core';
import { MenuActionService } from 'src/app/Services/menu-action.service';

@Component({
  selector: 'app-nav-mob',
  templateUrl: './nav-mob.component.html',
  styleUrls: ['./nav-mob.component.scss']
})
export class NavMobComponent {

  constructor(public menuActionService:MenuActionService){}
}
