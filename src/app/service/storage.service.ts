import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebaseConfig)

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storageRef = firebase.app().storage().ref();

  constructor() { }

  async uploadProfileImage(name: string, image: any): Promise<any> {

    try {
      const res = await this.storageRef.child("users/profile/" + name).putString(image, "data_url");
      console.log(res);
      return await res.ref.getDownloadURL();
    } catch (err) {
        console.log(err)
        return null;
    }

  }

  async uploadBannerImage(name: string, image: any): Promise<any> {

    try {
      const res = await this.storageRef.child("users/banner/" + name).putString(image, "data_url");
      console.log(res);
      return await res.ref.getDownloadURL();
    } catch (err) {
        console.log(err)
        return null;
    }

  }
}
