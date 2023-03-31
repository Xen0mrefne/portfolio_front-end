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

  async uploadImage(path: string, name: string, image: any): Promise<any> {

    try {
      const res = await this.storageRef.child(path + name).putString(image, "data_url");
      console.log(res);
      return await res.ref.getDownloadURL();
    } catch (err) {
        console.log(err)
        return null;
    }

  }

  async deleteImage(path: string, name: string): Promise<void> {

      const res = await this.storageRef.child(path + name).delete().catch((error) => {
        console.log(error)
      })
      console.log("Delete: " + res)
      
  }
}
