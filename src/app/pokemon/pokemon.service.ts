import { Injectable, inject } from '@angular/core';
import { pokemonTrainer } from '../models/pokemonTrainer';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  trainersList: Array<pokemonTrainer> = [];
  info$!: Observable<any[]>; 

  private firestore: Firestore = inject(Firestore);

  constructor() {
    const pokemonCollection = collection( this.firestore, 'pokemon_club' );
    this.info$ = collectionData( pokemonCollection );
    this.info$.subscribe( element => {
      
    });
  }

  getFirestore(){
    return this.firestore;
  }

}
