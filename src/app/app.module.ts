import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCBYRGJenLo-Z-AQq8S8eUNXplKlPX1MWc',
      authDomain: 'auratrip-angular.firebaseapp.com',
      databaseURL: 'https://auratrip-angular-default-rtdb.firebaseio.com',
      projectId: 'auratrip-angular',
      storageBucket: 'auratrip-angular.appspot.com',
      messagingSenderId: '338264875102',
      appId: '1:338264875102:web:dc8d78fdae7122e78ad4cf',
      measurementId: 'G-Q6SC0Z0317',
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
  providers: [AuthService],
})
export class AppModule {}
