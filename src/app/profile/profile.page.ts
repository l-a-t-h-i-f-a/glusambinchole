import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  user : any
  constructor(private alertController: AlertController,
    public authService : AuthenticationService, public router : Router
  ) 
  
  { this.user = authService.getProfile()}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Keluar?',
      cssClass : 'custom-alert',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'cancel-button',
        },
        {
          text: 'Ya',
          cssClass: 'confirm-button',
          handler: () => {
            this.logout()
        
          },
        },
      ],
    });

    await alert.present();

 
  }

  async logout(){
    this.authService.signOut().then(()=>(
      this.router.navigate(['/welcome'])
    ))
  }
}
