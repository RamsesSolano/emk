import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trainer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.scss'
})
export class TrainerComponent {

  onSubmit() {
    // Here you can handle form submission
    console.log('Form submitted!');
  }

}
