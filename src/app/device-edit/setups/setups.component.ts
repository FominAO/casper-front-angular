import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ChangableStatusComponent } from '../../ui/changable-status/changable-status.component';
import { ChangableValueComponent } from '../../ui/changable-value/changable-value.component';
import { EditNameComponent } from '../../ui/edit-name/edit-name.component';
import { ToggleComponent } from '../../ui/toggle/toggle.component';
import { Setup } from '../../devices/setup.interface';

@Component({
  selector: 'app-setups',
  standalone: true,
  imports: [CommonModule, EditNameComponent, MatDividerModule, ChangableStatusComponent, MatCardModule, ChangableValueComponent, ToggleComponent],
  templateUrl: './setups.component.html',
  styleUrl: './setups.component.less'
})
export class SetupsComponent {
  @Input() setups!: Setup[];
}
