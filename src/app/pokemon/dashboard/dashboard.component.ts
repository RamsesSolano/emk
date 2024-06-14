import { Component } from '@angular/core';
import { PokemonTrainer } from '../../models/pokemonTrainer';
import { PokemonService } from '../pokemon.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { TrainerComponent } from '../trainer/trainer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, TrainerComponent, CommonModule, MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  trainersList: Array<PokemonTrainer> = [];
  displayedColumns: string[] = ['name', 'cellphone'];


  constructor(pokemonService: PokemonService) {
    pokemonService.getTrainersInformation().subscribe(information => this.trainersList = information);
  }


  onSubmit() {
    // Here you can handle form submission
    console.log('Form submitted!');
  }

}
