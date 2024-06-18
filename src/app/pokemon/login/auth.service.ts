import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: Auth) { }

  signup(email: string, password: string) {
    createUserWithEmailAndPassword(this.afAuth, email, password);
  }

  authState(){
    console.log( 'ramses example', this.afAuth.currentUser );
    return this.afAuth.currentUser !== null; 
  }


}
