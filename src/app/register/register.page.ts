import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  regForm: FormGroup;
  showPassword = false;

  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
        ],
      ],
    });
  }

  get errorControl() {
    return this.regForm?.controls;
  }

  async registerUser() {
    const loading = await this.loadingCtrl.create({
      message: 'Registering...',
    });
    await loading.present();

    if (this.regForm?.valid) {
      try {
        const user = await this.authService.registerUser(
          this.regForm.value.email,
          this.regForm.value.password
        );

        if (user) {
          loading.dismiss();
          this.router.navigate(['/tabs/home']);
        }
      } catch (error) {
        loading.dismiss();
        this.showAlert('Registration Failed', error.message);
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
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;  
  }
}
