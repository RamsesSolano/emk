import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonService } from '../pokemon.service';
import { PokemonTrainer } from '../../models/pokemonTrainer';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-trainer',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  providers: [ PokemonService ],
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.scss'
})
export class TrainerComponent {

  trainerInfoForm = new FormGroup({
    name: new FormControl(''),
    cellphone: new FormControl('')
  });

  pokemonService: PokemonService = inject( PokemonService );
  auth = inject( Auth );

  onSubmit() {
    console.log( this.trainerInfoForm.value );
    if( this.trainerInfoForm.valid ){

      const name = ( ( this.trainerInfoForm.get('name') )? this.trainerInfoForm.get('name')?.value : '' );
      const cellphone = ( ( this.trainerInfoForm.get('cellphone') )? this.trainerInfoForm.get('name')?.value : '' );

      const newPokemonTrainer: PokemonTrainer = {
        name: name,
        cellphone: cellphone,
        accounts : []
      }

      this.pokemonService.addTrainer( newPokemonTrainer );

    }
  }

}
