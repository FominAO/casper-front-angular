import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ProfileUpdateService } from './auth/profile-update.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'casper-front';

  user$ = this.profileUpdateService.state$;

  constructor(private readonly profileUpdateService: ProfileUpdateService) {
    this.profileUpdateService.setUresState({});
  }

  operatorMode() {
    this.profileUpdateService.setOperatorState();
  }
  userMode() {
    this.profileUpdateService.setUresState({});
  }
}
