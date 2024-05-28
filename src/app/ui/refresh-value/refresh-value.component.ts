import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-refresh-value',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './refresh-value.component.html',
  styleUrl: './refresh-value.component.less'
})
export class RefreshValueComponent {
@Input() timeout: number = 1000;

refreshing$ = new BehaviorSubject(false);

refresh() {
  this.refreshing$.next(true);
  setTimeout(() => {
    this.refreshing$.next(false);
  }, this.timeout);
}
}
