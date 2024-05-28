import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-edit-name',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './edit-name.component.html',
  styleUrl: './edit-name.component.less',
})
export class EditNameComponent {
  @Input() name!: string;
  @Input() label!: string;
  @Input() change = true;
  @Output() edited = new EventEmitter();

  constructor(private readonly ds: DialogService) {}

  edit() {
    const dialogRef = this.ds
      .openDialog(
        {
          title: `Изменить ${this.label.toLocaleLowerCase()}`,
          question: 'Введите желаемое значение в поле ниже:',
          inputLabel: this.label,
          inputData: this.name,
        },
        'ask'
      )
      .afterClosed()
      .subscribe((result) => {
        if (result && result !== this.name) {
          this.edited.emit(result);
          if (this.change) {
            this.name = result;
          }
        } else {
          this.edited.emit(this.name);
        }
      });
  }
}
