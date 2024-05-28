import { Component, Input } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [MatButtonToggleModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.less'
})
export class ToggleComponent {
  @Input() value!: boolean;
@Input() firstTitle = 'Вкл';
@Input() secondTitle = 'Выкл';
@Input() disabled = true;
}
