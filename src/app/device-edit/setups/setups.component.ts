import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ChangableStatusComponent } from '../../ui/changable-status/changable-status.component';
import { ChangableValueComponent } from '../../ui/changable-value/changable-value.component';
import { EditNameComponent } from '../../ui/edit-name/edit-name.component';
import { ToggleComponent } from '../../ui/toggle/toggle.component';
import { Setup } from '../../devices/setup.interface';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogService } from '../../ui/dialog.service';

@Component({
  selector: 'app-setups',
  standalone: true,
  imports: [CommonModule, EditNameComponent, MatDividerModule, ChangableStatusComponent, MatCardModule, ChangableValueComponent, ToggleComponent, MatSelectModule, MatIconModule, MatButtonModule],
  templateUrl: './setups.component.html',
  styleUrl: './setups.component.less'
})
export class SetupsComponent {
  @Input() setups!: Setup[];
  @Input() editMode: boolean = false;

  constructor(private readonly ds: DialogService) {}

  add() {
    this.ds.openDialog({
      title: 'Добавление нового устройства',
      inputLabel: 'Название устройства',
      okText: 'Добавить'
    }, 'ask').afterClosed().subscribe(result => {
      if (result) {
        this.setups.push({
          id: '12',
          name: result,
          status: 'offline',
          inputNumber: 0,
        })
      }
    })
  }
}
