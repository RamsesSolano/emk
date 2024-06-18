import { Component, inject } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './login/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterOutlet],
  providers: [ PokemonService, AuthService, CommonModule ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {

  private authService: AuthService = inject( AuthService );

  constructor(  ){

  }

  isLogging(){
    console.log( 'ramses estado del usuario' );
    console.log( this.authService.authState() );
    return this.authService.authState();
  }

}
