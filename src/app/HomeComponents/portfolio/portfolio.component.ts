import { Component } from '@angular/core';
import { constant } from 'src/app/Constants/constant';
import { Project } from 'src/app/Models/Project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects: Project[] = [];
  Images: String[] = [];
  constructor()
  {
    this.projects = constant.projects;
  }

  setImage(proejct: Project)
  {
    this.Images = proejct.Images;
  }

}
