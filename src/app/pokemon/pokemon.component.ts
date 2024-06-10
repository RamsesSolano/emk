import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrainerComponent } from './trainer/trainer.component';
import { PokemonService } from './pokemon.service';
import { PokemonTrainer } from '../models/pokemonTrainer';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [FormsModule, TrainerComponent, CommonModule, MatTableModule],
  providers: [ PokemonService ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {

  trainersList: Array<PokemonTrainer> = [];
  displayedColumns: string[] = ['name', 'cellphone' ];


  constructor( pokemonService: PokemonService ){
    pokemonService.getTrainersInformation().subscribe( information => this.trainersList = information );
  }


  onSubmit() {
    // Here you can handle form submission
    console.log('Form submitted!');
  }

}
