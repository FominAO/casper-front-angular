import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotificationsEnum } from './notifications.enum';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  notifications$ = new BehaviorSubject([
    {
      id: 'id1',
      title: 'Прибор 1: внешнее питание отключено!',
    },
    {
      id: 'id2',
      title: 'Прибор 1: внешнее питание восстановленно.',
    },
    {
      id: 'id3',
      title:
        'Прибор 1: отопление(второй этаж) -  температура вышла за установленный диапазон.',
    },
    {
      id: 'id4',
      title: 'Прибор 1: сигнализация(улица) включена!',
    },
    {
      id: 'id5',
      title: 'Прибор 1: сигнализация(улица) выключена.',
    },
    {
      id: 'id6',
      title: 'Прибор 1: охранный блок 1 - размыкание Контур(прихожая)!',
    },
    {
      id: 'id7',
      title: 'Прибор 1: переход на резервное питание!',
    },
  ]);

  constructor() {}

  generateNotify() {
    this.notifications$.next([
      ...this.notifications$.getValue(),
      {
        id: (+new Date()).toString().slice(-10),
        title: NotificationsEnum.OutOfTemperatureRange,
      },
    ]);
  }

  deleteNotification(id: string) {
    this.notifications$.next([
      ...this.notifications$.getValue().filter((n) => n.id !== id),
    ]);
  }
}
