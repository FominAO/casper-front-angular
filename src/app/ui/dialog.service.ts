import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from './dialog/dialog-data.interface';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { DialogAskComponent } from './dialog-ask/dialog-ask.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) {}

  openDialog(data: DialogData, type: 'ask' | 'confirm' = 'confirm') {
    let comp = DialogConfirmComponent;
    switch (type) {
      case 'ask':
        comp = DialogAskComponent;
        break;
    
      default:
        comp = DialogConfirmComponent;
        break;
    }
    const dialogRef = this.dialog.open(comp, {
      data,
    });

    return dialogRef;
  }

}
