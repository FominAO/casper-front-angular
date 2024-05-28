import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ProfileUpdateService } from '../auth/profile-update.service';
import { CommonModule } from '@angular/common';
import { EditNameComponent } from '../ui/edit-name/edit-name.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatButtonModule, CommonModule, EditNameComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less'
})
export class ProfileComponent {
  user$ = this.profileUpdateService.state$;
  constructor(private readonly profileUpdateService: ProfileUpdateService) {}
  editName(name: string) {
      this.profileUpdateService.setUresState(name);
  }
}
