import { Component, Input } from '@angular/core';
import { HeatingEquipment } from '../../devices/heating-equipment.interface';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ChangableStatusComponent } from '../../ui/changable-status/changable-status.component';
import { EditNameComponent } from '../../ui/edit-name/edit-name.component';
import { ChangableValueComponent } from '../../ui/changable-value/changable-value.component';

@Component({
  selector: 'app-heating-equipment',
  standalone: true,
  imports: [EditNameComponent, MatDividerModule, ChangableStatusComponent, MatCardModule, ChangableValueComponent],
  templateUrl: './heating-equipment.component.html',
  styleUrl: './heating-equipment.component.less'
})
export class HeatingEquipmentComponent {
@Input() heatingEquipment!: HeatingEquipment;
}
