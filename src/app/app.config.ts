import { ApplicationConfig, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FirebaseApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { getVertexAI, provideVertexAI } from '@angular/fire/vertexai-preview';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

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
    /*
    provideAnalytics(() => g
    etAnalytics()), 
    ScreenTrackingService, 
    UserTrackingService, 
    provideAppCheck(() => {
      // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
      const provider = new ReCaptchaEnterpriseProvider('6Le7f_EpAAAAAJEes3j1UXj-l3WGpNxbiDXCdOJL');
      return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
    }),
    */ 
    provideFirestore(() => getFirestore()), 
    /*
    provideDatabase(() => getDatabase()), 
    provideFunctions(() => getFunctions()), 
    provideMessaging(() => getMessaging()), 
    providePerformance(() => getPerformance()), 
    provideStorage(() => getStorage()), 
    provideRemoteConfig(() => getRemoteConfig()), 
    provideVertexAI(() => getVertexAI()), provideAnimationsAsync()
    */
  ]
};
