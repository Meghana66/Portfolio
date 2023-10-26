import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuActionService {
  currentSection = 'section1';
  constructor() { }
}
