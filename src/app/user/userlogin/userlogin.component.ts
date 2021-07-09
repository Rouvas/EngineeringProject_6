import { Component, OnInit } from '@angular/core';
import {SrvService} from '../../services/srv.service';
import {NotificationsService} from 'angular2-notifications';
import { Router} from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  logincred = {
    last_name: '',
    birth_date: ''
  };

  persons = [];

  alert = 0;

  constructor(private srv: SrvService, private notifications: NotificationsService, private router: Router) { }

  ngOnInit(): void {
  }

  openPerson(person) {
    console.log(person);
    this.router.navigate(['worker/dashboard', person.id]);
  }

  onLogin() {
    this.alert = 0;
    console.log(this.logincred);
    this.persons = [];
    this.srv.getPersons().then(() =>
      (this.srv.persons).forEach(person => {
        this.persons.push(person);
        // tslint:disable-next-line:max-line-length
        if (person.last_name === this.logincred.last_name || person.birth_date === this.logincred.birth_date) {console.log('Совпадение'); this.openPerson(person); }

        for (const i of this.persons) {
          if (person.last_name === this.logincred.last_name || person.birth_date === this.logincred.birth_date) {this.alert++; }
        }
      })
    ).then(() => {    if (this.alert === 0) {
      // @ts-ignore
      this.notifications.create('Ошибка!', 'Сотрудник не найден, проверьте введенные данные', 'error', {
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true,
        animate: 'fromRight'
      });
    }

    });

  }



}
