import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { BackupPowerComponent } from '../device-edit/backup-power/backup-power.component';
import { HeatingEquipmentComponent } from '../device-edit/heating-equipment/heating-equipment.component';
import { SecurityAlarmComponent } from '../device-edit/security-alarm/security-alarm.component';
import { SecuritySirenComponent } from '../device-edit/security-siren/security-siren.component';
import { SetupsComponent } from '../device-edit/setups/setups.component';
import { ChangableStatusComponent } from '../ui/changable-status/changable-status.component';
import { EditNameComponent } from '../ui/edit-name/edit-name.component';
import { Device } from '../devices/device.interface';
import { DevicesService } from '../devices/devices.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-new',
  standalone: true,
  imports: [
    MatInputModule,
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
    BackupPowerComponent,
    FormsModule
  ],
  templateUrl: './device-new.component.html',
  styleUrl: './device-new.component.less',
})
export class DeviceNewComponent {
  device: Device = {
    id: (+new Date()).toString().slice(-10),
    name: 'Новый прибор',
    status: 'offline',
    heatingEquipment: {
        id: '1',
        name: '',
        status: 'offline',
        inputNumber: 1,
        userRange: [15,26],
        units: '°С',
        maxValue: 30,
        minValue: 10,
        type: 'heatingEquipment',
    },
    securityAlarm: {
        id: '1',
        name: 'Охранный блок 1',
        status: 'offline',
        alarmInputs: [
            {
                id: '1',
                name: '',
                status: 'offline',
                sound: true,
                switchState: false,
                type: 'alarmInput',
            },
        ],
        type: 'securityAlarm',
    },
    securitySiren: {
        id: '1',
        name: '',
        status: 'offline',
    },
    setups: [
        {
            id: '1',
            name: '',
            status: 'offline',
            inputNumber: 1,
        },
    ],
    backupPower: {
        id: '1',
        name: '',
        status: 'offline',
    }
}

constructor(private readonly devicesService: DevicesService, private readonly router: Router) {} 

add() {
  this.devicesService.addDevice(this.device);
  this.router.navigate(['/devices'])
}
}
