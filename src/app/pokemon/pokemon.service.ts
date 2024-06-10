import { Injectable, inject } from '@angular/core';
import { PokemonTrainer } from '../models/pokemonTrainer';
import { Observable } from 'rxjs';
import { CollectionReference, DocumentData, Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  trainersList: Array<PokemonTrainer> = [];
  info$!: Observable<any[]>;

  private firestore: Firestore = inject(Firestore);
  private trainersInformation: CollectionReference< DocumentData, DocumentData >;

  constructor() {

    this.trainersInformation = collection( this.firestore, 'pokemon_club' );

    /*
    const pokemonCollection = collection( this.firestore,  );
    this.info$ = collectionData( pokemonCollection );
    this.info$.subscribe( element => {
      this.trainersList = element;
      console.log( this.trainersList );
    });
    */
  }

  getTrainersInformation(): Observable<PokemonTrainer[]>{
    return collectionData( this.trainersInformation ) as Observable< PokemonTrainer[] >;
  }

  getFirestore(){
    return this.firestore;
  }

  addTrainer( newPokemonTrainer: PokemonTrainer ){
    return addDoc( this.trainersInformation, newPokemonTrainer );
  }

}
