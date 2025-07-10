import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideServiceWorker } from '@angular/service-worker';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: "AIzaSyDeuMO0VSvpZcNFa-bwb6C-2UMRON0qeYo",
        authDomain: "screenleads-e7e0b.firebaseapp.com",
        projectId: "screenleads-e7e0b",
        storageBucket: "screenleads-e7e0b.firebasestorage.app",
        messagingSenderId: "1015460177639",
        appId: "1:1015460177639:web:5baef8c76677189c65a442",
        measurementId: "G-FBHGCS1EZ1"
      })
    ),
    provideAuth(() => getAuth()),
    provideServiceWorker('ngsw-worker.js', { enabled: true })
  ]
});