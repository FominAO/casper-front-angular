import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotificationsEnum } from './notifications.enum';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notifications$ = new BehaviorSubject([{
    id: 'id',
    title: NotificationsEnum.BackupSupplyEnabling
  }])

  constructor() { }


  generateNotify() {
    this.notifications$.next(
      [...this.notifications$.getValue(), {
        id: (+new Date()).toString().slice(-10),
        title: NotificationsEnum.OutOfTemperatureRange
      }]
    )
  }

  deleteNotification(id: string) {
    this.notifications$.next(
      [...this.notifications$.getValue().filter(n => n.id !== id)]
    )
  }
}
