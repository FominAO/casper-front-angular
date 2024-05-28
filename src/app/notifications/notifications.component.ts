import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NotificationsService } from './notifications.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.less'
})
export class NotificationsComponent {
  notificatios$ = this.service.notifications$;

  constructor(private readonly service: NotificationsService) {}

  remove(id: string) {
    this.service.deleteNotification(id);
  }
}
