import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-authsys',
  templateUrl: './authsys.component.html',
  styleUrls: ['./authsys.component.css']
})
export class AuthsysComponent implements OnInit {

  constructor(private notifications: NotificationsService) { }

  ngOnInit(): void {
  }

  onLogin() {
    // @ts-ignore
    this.notifications.create('Ошибка!', 'Посылка ещё не доставлена получателю или введён неверный пин-код', 'error', {
      timeOut: 5000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
      animate: 'fromRight'
    });
  }

}
