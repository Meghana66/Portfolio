import { Component } from '@angular/core';
import { constant } from 'src/app/Constants/constant';
import { Service } from 'src/app/Models/Service';

@Component({
  selector: 'app-what-ido',
  templateUrl: './what-ido.component.html',
  styleUrls: ['./what-ido.component.scss']
})
export class WhatIDoComponent {
services:Service[];
  constructor(){
    this.services = constant.services;
  }
}
