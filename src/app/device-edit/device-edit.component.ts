import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { DevicesService } from '../devices/devices.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { EditNameComponent } from '../ui/edit-name/edit-name.component';
import { Device } from '../devices/device.interface';
import { MatDividerModule } from '@angular/material/divider';
import { ChangableStatusComponent } from '../ui/changable-status/changable-status.component';
import { MatCardModule } from '@angular/material/card';
import { HeatingEquipmentComponent } from './heating-equipment/heating-equipment.component';
import { SecurityAlarmComponent } from './security-alarm/security-alarm.component';
import { SecuritySirenComponent } from './security-siren/security-siren.component';
import { SetupsComponent } from './setups/setups.component';
import { BackupPowerComponent } from './backup-power/backup-power.component';

@Component({
  selector: 'app-device-edit',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    EditNameComponent,
    MatDividerModule,
    ChangableStatusComponent,
    MatCardModule,
    HeatingEquipmentComponent,
    SecurityAlarmComponent,
    SecuritySirenComponent,
    SetupsComponent,
    BackupPowerComponent
  ],
  templateUrl: './device-edit.component.html',
  styleUrl: './device-edit.component.less',
})
export class DeviceEditComponent {
  device$ = this.route.params.pipe(
    switchMap((params) => this.devicesService.getDeviceById(params['id']))
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly devicesService: DevicesService
  ) {}

  editHeatingEquipmentName(device: any, name: string) {}
}
