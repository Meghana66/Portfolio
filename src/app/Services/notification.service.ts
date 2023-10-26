import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notifierservice: NotifierService) { }

  showNotification(type: string, message: string){
    this.notifierservice.notify(type, message)
  }

}
