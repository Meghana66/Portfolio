import { Component, OnInit } from '@angular/core';
import { constant } from 'src/app/Constants/constant';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  from:string;
  constructor() {
    this.from = constant.location;
   }

  ngOnInit() {
    const target = document.querySelector('.twTest');
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: '#6161c7',
      cursorClassName: 'cursor'
    })

    writer
    .type("I'm a Front End Developer.")
    .rest(500)
    .clear()
    .type("I use Angular for web development.")
    .rest(500)
    .clear()
    .type("I have also worked on Spring-Boot and MySQL .")
    .rest(500)
    .clear()
    .start()
  }


}
