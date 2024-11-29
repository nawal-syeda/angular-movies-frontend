import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-edit-theaters',
  standalone: true,
  imports: [],
  templateUrl: './edit-theaters.component.html',
  styleUrl: './edit-theaters.component.css'
})
export class EditTheatersComponent {
  @Input({transform: numberAttribute})
  id!: number;

}
