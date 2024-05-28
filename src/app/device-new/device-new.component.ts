import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-device-new',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './device-new.component.html',
  styleUrl: './device-new.component.less'
})
export class DeviceNewComponent {

}
