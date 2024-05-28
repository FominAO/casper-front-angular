import { Component, Input } from '@angular/core';
import { SecurityAlarm } from '../../devices/security-alarm.interface';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ChangableStatusComponent } from '../../ui/changable-status/changable-status.component';
import { ChangableValueComponent } from '../../ui/changable-value/changable-value.component';
import { EditNameComponent } from '../../ui/edit-name/edit-name.component';
import { ToggleComponent } from '../../ui/toggle/toggle.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-security-alarm',
  standalone: true,
  imports: [CommonModule, EditNameComponent, MatDividerModule, ChangableStatusComponent, MatCardModule, ChangableValueComponent, ToggleComponent],
  templateUrl: './security-alarm.component.html',
  styleUrl: './security-alarm.component.less'
})
export class SecurityAlarmComponent {
  @Input() securityAlarm!: SecurityAlarm;
}
