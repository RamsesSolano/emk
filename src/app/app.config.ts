import { ApplicationConfig, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FirebaseApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideFirebaseApp(() => initializeApp({
      "projectId":"example-angular-e7623",
      "appId":"1:213162174191:web:d626329852968dc6badd1a",
      "databaseURL":"https://example-angular-e7623.firebaseio.com",
      "storageBucket":"example-angular-e7623.appspot.com",
      "apiKey":"AIzaSyBpt9g4caU6GnhsWEFJtiNlg0gjzmomaxw",
      "authDomain":"example-angular-e7623.firebaseapp.com",
      "messagingSenderId":"213162174191"
    })), 
    provideAuth(() => getAuth(inject(FirebaseApp))), 
    provideFirestore(() => getFirestore()), 
    
  ]
};
