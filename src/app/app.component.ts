import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet]
})
export class AppComponent {

  item$!: Observable<any[]>;
  firestore: Firestore = inject( Firestore);
  title = 'emk';

  constructor() {
    
    const itemCollection = collection( this.firestore, 'pokemon_club' );
    console.log( itemCollection );
    
    this.item$ = collectionData( itemCollection );
    this.item$.subscribe( element => {
      console.log( element );
    });
    
  }

}
