import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lupapw',
  templateUrl: './lupapw.page.html',
  styleUrls: ['./lupapw.page.scss'],
})
export class LupapwPage implements OnInit {
  resetForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get errorControl() {
    return this.resetForm.controls;
  }

  async resetPassword() {
    const loading = await this.loadingCtrl.create({
      message: 'Mengirim link reset password...',
    });
    await loading.present();

    if (this.resetForm.valid) {
      const email = this.resetForm.value.email;
      try {
        await this.authService.resetPassword(email);
        loading.dismiss();
        this.showAlert('Sukses', 'Link reset password sudah dikirim ke email kamu.');
      } catch (error) {
        loading.dismiss();
        this.showAlert('Error', 'Gagal mengirim link. Cek kembali email kamu.');
      }
    } else {
      loading.dismiss();
      this.showAlert('Error', 'Masukkan email yang valid.');
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
