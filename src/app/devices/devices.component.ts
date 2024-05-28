import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DevicesService } from './devices.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CardComponent } from '../ui/card/card.component';
import { ProfileUpdateService } from '../auth/profile-update.service';
import { DialogService } from '../ui/dialog.service';
import { ChangableStatusComponent } from '../ui/changable-status/changable-status.component';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    CardComponent,
    MatDividerModule,
    ChangableStatusComponent,
  ],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.less',
})
export class DevicesComponent {
  devices$ = this.devicesService.getDevices();
  user$ = this.profileUpdateService.state$;

  constructor(
    private readonly devicesService: DevicesService,
    private readonly profileUpdateService: ProfileUpdateService,
    private readonly dialogService: DialogService
  ) {}

  deleteDevice(device: any) {
    this.dialogService
      .openDialog({
        title: `Вы точно хотите удалить прибор "${device.name}"?`,
        question: 'Это действие будет невозможно отменить!',
        okText: 'УДАЛИТЬ',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.devicesService.deleteDevice(device.id);
        }
      });
  }
}
