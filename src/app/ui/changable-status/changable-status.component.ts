import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DialogService } from '../dialog.service';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-changable-status',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './changable-status.component.html',
  styleUrl: './changable-status.component.less'
})
export class ChangableStatusComponent {
  @Input() status!: 'online' | 'offline';
  @Input() label!: string;

  @Output() edited = new EventEmitter();
  
  constructor(private readonly ds: DialogService) {}
  
  edit() {
    const dialogRef = this.ds.openDialog({
      title: `${this.status === 'online' ? 'Выключить' : 'Включить' } ${this.label.toLocaleLowerCase()}?`,
      okText: `${this.status === 'online' ? 'Выключить' : 'Включить' }`
    }).afterClosed().subscribe(result => {
      if (result) {
        this.status = this.status === 'online' ? 'offline' : 'online';
        this.edited.emit(this.status);
      } else {
        this.edited.emit(this.status);
      }
    });
  }
}
