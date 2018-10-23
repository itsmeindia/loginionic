import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {UtilisateurPage} from "../utilisateur/utilisateur";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('Username') user;
  @ViewChild('Password') password;

  constructor(private firebaseauth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  registerUser()
  {
    this.firebaseauth.auth.createUserWithEmailAndPassword(this.user.value,this.password.value)
      .then(data =>{console.log("bien enregistrer",data);
        this.navCtrl.push(UtilisateurPage);
      })
      .catch(error =>{
        console.log("une erreur enregistrer",error);
      })
    console.log(this.user.value);

  }

}
