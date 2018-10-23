import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {LoginPage} from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule} from  'angularfire2/firestore';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {UtilisateurPage} from "../pages/utilisateur/utilisateur";




const firebaseAuth = {
  apiKey: "AIzaSyAI3kD98ozGm8d5zZ4XpennM7diihwkYCQ",
  authDomain: "apputil-d2578.firebaseapp.com",
  databaseURL: "https://apputil-d2578.firebaseio.com",
  projectId: "apputil-d2578",
  storageBucket: "apputil-d2578.appspot.com",
  messagingSenderId: "146660938026"
};


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    UtilisateurPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth ),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    UtilisateurPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
