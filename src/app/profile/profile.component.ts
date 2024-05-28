import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ProfileUpdateService } from '../auth/profile-update.service';
import { CommonModule } from '@angular/common';
import { EditNameComponent } from '../ui/edit-name/edit-name.component';
import { DialogService } from '../ui/dialog.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatButtonModule, CommonModule, EditNameComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less'
})
export class ProfileComponent {
  user$ = this.profileUpdateService.state$;
  constructor(private readonly profileUpdateService: ProfileUpdateService, private readonly ds: DialogService) {}
  editName(name: string) {
      this.profileUpdateService.setUresState({name});
  }
  changeCredits(login: string) {
    this.ds.openDialog({
      title: 'Изменение логина и пароля',
      inputData: login 
    }, 'credits').afterClosed().subscribe(result => {
      if(result) {
        this.profileUpdateService.setUresState({login: result});
        console.log(result);
        
      }
    })
  }
}
