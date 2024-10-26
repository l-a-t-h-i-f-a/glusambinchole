import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gantipw',
  templateUrl: './gantipw.page.html',
  styleUrls: ['./gantipw.page.scss'],
})
export class GantipwPage implements OnInit {
  passwordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    });
  }

  get errorControl() {
    return this.passwordForm.controls;
  }

  async changePassword() {
    const loading = await this.loadingCtrl.create({
      message: 'Changing Password...',
    });
    await loading.present();

    if (this.passwordForm.valid) {
      const { oldPassword, newPassword, confirmPassword } = this.passwordForm.value;

      if (newPassword !== confirmPassword) {
        loading.dismiss();
        this.showAlert('Error', 'New passwords do not match!');
        return;
      }

      try {
        const user = await this.authService.getProfile();

        if (user) {
          const credential = await this.authService.ngFireAuth.signInWithEmailAndPassword(user.email, oldPassword);
          if (credential.user) {
            await user.updatePassword(newPassword);
            loading.dismiss();
            this.showAlert('Success', 'Password changed successfully!');
            this.router.navigate(['/gantipw']); 
          }
        }
      } catch (error) {
        loading.dismiss();
        this.showAlert('Error', error.message);
      }
    } else {
      loading.dismiss();
      this.showAlert('Error', 'Please provide valid information.');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
