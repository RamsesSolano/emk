import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, elementAt } from 'rxjs';
import { User } from './models/user';
import { Firestore, collection, collectionData, getFirestore } from '@angular/fire/firestore';
import { PokemonComponent } from "./pokemon/pokemon.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PokemonComponent]
})
export class AppComponent {

  item$!: Observable<any[]>;
  firestore: Firestore = inject( Firestore);
  title = 'emkpage';

  constructor() {
    
    const itemCollection = collection( this.firestore, 'pokemon_club' );
    console.log( itemCollection );
    
    this.item$ = collectionData( itemCollection );
    this.item$.subscribe( element => {
      console.log( element );
    });
    
  }

}
