import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterOutlet],
  providers: [ PokemonService ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {

 

}
