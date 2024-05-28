import { Component, Input } from '@angular/core';
import { SecuritySiren } from '../../devices/security-siren.interface';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ChangableStatusComponent } from '../../ui/changable-status/changable-status.component';
import { ChangableValueComponent } from '../../ui/changable-value/changable-value.component';
import { EditNameComponent } from '../../ui/edit-name/edit-name.component';
import { ToggleComponent } from '../../ui/toggle/toggle.component';
import { RefreshValueComponent } from '../../ui/refresh-value/refresh-value.component';

@Component({
  selector: 'app-security-siren',
  standalone: true,
  imports: [CommonModule, EditNameComponent, MatDividerModule, ChangableStatusComponent, MatCardModule, ChangableValueComponent, ToggleComponent, RefreshValueComponent],
  templateUrl: './security-siren.component.html',
  styleUrl: './security-siren.component.less'
})
export class SecuritySirenComponent {
  @Input() securitySiren!: SecuritySiren;
}
