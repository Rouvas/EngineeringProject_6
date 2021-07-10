import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Offline Event
  @HostListener('window:offline', ['$event'])
  OfflineEvent(event: Event) {

    console.log(event);
    // @ts-ignore
    this.notifications.create('Внимание!', 'Интернет соединение потеряно! Сессия завершена.', 'error', {
      timeOut: 5000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
      animate: 'fromRight'
    });
    this.authstate = null;
    localStorage.removeItem('auth');
    this.router.navigateByUrl('/');
  }

  // Online event
  @HostListener('window:online', ['$event'])
  OnlineEvent(event: Event) {

    console.log(event);
    // @ts-ignore
    this.notifications.create('Внимание!', 'Интернет соединение восстановлено! Вы можете авторизироваться!', 'success', {
      timeOut: 5000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
      animate: 'fromRight'
    });

  }

  constructor(private router: Router, private notifications: NotificationsService) { }

  authstate = null;

  ngOnInit(): void {
    this.authstate = JSON.parse(localStorage.getItem('auth') as string);
  }

  onExit() {
    localStorage.removeItem('auth');
    // @ts-ignore
    this.router.navigateByUrl('/');
    this.authstate = null;
  }

}
