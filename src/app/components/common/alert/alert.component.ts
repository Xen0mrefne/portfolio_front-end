import { Component, HostBinding, OnChanges, SimpleChanges } from '@angular/core';
import { Alert } from 'src/app/model/alert';
import { AlertService } from 'src/app/service/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  alert: Alert = new Alert("", false)
  hideTimer: any;

  constructor(private alertService: AlertService) { }

  @HostBinding('class.active') showAlert: boolean = false;

  ngOnInit(): void {
    this.alertService.alert$.subscribe(data => {
      this.alert = data;
      this.showAlert = true;
      clearTimeout(this.hideTimer)
      this.hideTimer = setTimeout(() => {
        this.showAlert = false;
      }, 3000)
    })
  }

  closeAlert(): void {
    clearTimeout(this.hideTimer)
    this.showAlert = false;
  }

}
