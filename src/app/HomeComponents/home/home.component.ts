import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MenuActionService } from '../../Services/menu-action.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit{


  @ViewChild('section1') section1: ElementRef;
  @ViewChild('section2') section2: ElementRef;
  @ViewChild('section3') section3: ElementRef;
  @ViewChild('section4') section4: ElementRef;
  @ViewChild('section5') section5: ElementRef;
  @ViewChild('section6') section6: ElementRef;

  public currentActive = 0;
  public section1Offset: Number;
  public section2Offset: Number ;
  public section3Offset: Number ;
  public section4Offset: Number;
  public section5Offset: Number;
  public section6Offset: Number;

  ngAfterViewInit() {
    this.section1Offset = this.section1.nativeElement.offsetTop;
    this.section2Offset = this.section2.nativeElement.offsetTop;
    this.section3Offset = this.section3.nativeElement.offsetTop;
    this.section4Offset = this.section4.nativeElement.offsetTop;
    this.section5Offset = this.section5.nativeElement.offsetTop;
    this.section6Offset = this.section6.nativeElement.offsetTop;
  }


  constructor(private menuActionService: MenuActionService) {}

  @HostListener('window:scroll', ['$event'])
  onSectionChange(sectionId: Event) {
    let pageYOffset = window.pageYOffset + 100;
    if (pageYOffset >= this.section1Offset && pageYOffset < this.section2Offset) {
      this.menuActionService.currentSection = "section1";
    } else if (pageYOffset >= this.section2Offset && pageYOffset < this.section3Offset) {
      this.menuActionService.currentSection = "section2";
    } else if (pageYOffset >= this.section3Offset && pageYOffset < this.section4Offset) {
      this.menuActionService.currentSection = "section3";
    } else if (pageYOffset >= this.section4Offset && pageYOffset < this.section5Offset) {
      this.menuActionService.currentSection = "section4";
    } else if (pageYOffset >= this.section5Offset && pageYOffset < this.section6Offset) {
      this.menuActionService.currentSection = "section5";
    } else if (pageYOffset >= this.section6Offset) {
      this.menuActionService.currentSection = "section6";
    } else {
      this.menuActionService.currentSection = "section1";
    }
  }


}
