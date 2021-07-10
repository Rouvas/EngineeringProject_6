import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { UserscredService } from '../services/userscred.service';

@Component({
  selector: 'app-authsys',
  templateUrl: './authsys.component.html',
  styleUrls: ['./authsys.component.css']
})
export class AuthsysComponent implements OnInit {

  constructor(private notifications: NotificationsService, private auth: UserscredService) {
  }

  credentials = {
    email: '',
    password: '',
  };

  ngOnInit(): void {
  }

  newAlert() {
    // @ts-ignore
    this.notifications.create('Внимание!', 'Обратитесь к администратору сервиса для восстановления пароля!', 'error', {
      timeOut: 5000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
      animate: 'fromRight'
    });
  }

  onLogin() {
    let error = 0;
    console.log(this.credentials);
    for (const auth of this.auth.credentials) {
      // tslint:disable-next-line:max-line-length
      if (auth.email === this.credentials.email && auth.password === this.credentials.password) {
        localStorage.setItem('auth', JSON.stringify(auth));
        error = 1;
        if (auth.role === 2) {
          window.location.replace('/supervisor');
        }
        if (auth.role === 1) {
          window.location.replace('/administrator');
        }
        if (auth.role === 0) {
          window.location.replace('/moderator');
        }
      }

    }
    if (error === 0) {
      // @ts-ignore
      this.notifications.create('Ошибка!', 'Неверный пароль или логин!', 'error', {
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true,
        animate: 'fromRight'
      });
    }
  }

  onCheck() {
    console.log(JSON.parse(localStorage.getItem('auth') as string));
  }

}
