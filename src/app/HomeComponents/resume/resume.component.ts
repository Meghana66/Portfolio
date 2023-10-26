import { Component } from '@angular/core';
import { constant } from 'src/app/Constants/constant';
import { college } from 'src/app/Models/college';
import { experience } from 'src/app/Models/experience';
import { skills } from 'src/app/Models/skills';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
colleges:college[];
experinces: experience[];
skills: skills[];

constructor(){
  this.experinces = constant.experience;
  this.colleges = constant.colleges;
  this.skills = constant.skills;
}

}
