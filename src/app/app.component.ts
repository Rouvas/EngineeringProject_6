import { Component , OnInit} from '@angular/core';

import {SrvService} from './services/srv.service';

import {Person} from './models/personmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'epprojectjune';


  constructor(private srv: SrvService) {
  }

  ngOnInit(): void {
   console.log(this.srv.getPersons());
   console.log(this.srv.getPersonsbyid(1));
   this.newUser();
  }

  newUser() {
  let obj: Person = {
    first_name: 'Jacob',
    last_name: 'Jobs',
    phone: '+89274533234',
    email: 'jacob@gmail.com',
    birth_date: '1999-01-01',
    status: 'Работает',
    organization: 1,
    work_place: 1,
    post: 1
    };
  console.log(obj);
  }
}
