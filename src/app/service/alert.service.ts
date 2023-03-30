import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from '../model/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alert = new Subject<Alert>();

  alert$ = this.alert.asObservable();

  constructor() { }

  setAlert(alert: Alert): void {
    this.alert.next(alert);

    this.getAlert();
  }

  getAlert(): Subject<Alert> {
    return this.alert;
  }

}
