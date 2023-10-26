import { Component } from '@angular/core';
import { constant } from 'src/app/Constants/constant';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
name :string;
email:string;
age:string;
from:string;
summary:string;
  constructor(){
    this.name = constant.fullName;
    this.age = constant.getAge();
    this.email = constant.personalEmail;
    this.from = constant.location;
    this.summary = constant.summary;
  }

}
