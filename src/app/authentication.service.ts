import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


export interface Users{
  name:string;
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public ngFireAuth: AngularFireAuth) { }

  async registerUser (email:string,password:string){
    return await this.ngFireAuth.createUserWithEmailAndPassword(email,password)
  }

  async loginUser (email:string,password:string){
    return await this.ngFireAuth.signInWithEmailAndPassword(email,password)
  }

  async updatePassword(newPassword: string) {
    const user = await this.getProfile();
    if (user) {
      return await user.updatePassword(newPassword);
    }
  }

  async signOut(){
    return await this.ngFireAuth.signOut()
  }

  async getProfile(){
    return await this.ngFireAuth.currentUser
  }

  async resetPassword(email: string) {
    return await this.ngFireAuth.sendPasswordResetEmail(email);
  }
}
