import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogService } from '../dialog.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-changable-value',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './changable-value.component.html',
  styleUrl: './changable-value.component.less'
})
export class ChangableValueComponent {
  @Input() value!: any;
  @Input() label!: string;
  @Input() units: string | undefined = '';

  @Output() edited = new EventEmitter();
  
  constructor(private readonly ds: DialogService) {}
  
  edit() {
    const dialogRef = this.ds.openDialog({
      title: `Изменить значение ${this.label.toLocaleLowerCase()}?`,
      inputData: this.value,
      okText: `Сохранить`
    }, 'ask').afterClosed().subscribe(result => {
      if (result && result !== this.value) {
        this.value = result;
      } 
      this.edited.emit(this.value);
    });
  }
}
