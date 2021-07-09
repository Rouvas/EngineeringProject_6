import { Component, OnInit } from '@angular/core';
import {SrvService} from '../../services/srv.service';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-worktimes',
  templateUrl: './worktimes.component.html',
  styleUrls: ['./worktimes.component.css']
})
export class WorktimesComponent implements OnInit {
  constructor(public srv: SrvService) { }

  organizations = [];
  persons = [];
  workplaces = [];
  worktimes = [];


  c1 = [];



  ngOnInit(): void {
    this.takeInfo();

  }


  takeInfo() {
    this.workplaces = [];
    this.persons = [];
    this.organizations = [];
    this.worktimes = [];



    this.srv.getWorkTimes().then(() =>
      (this.srv.worktimes).forEach(worktime => {
        worktime.cred = '';
        worktime.start_from = new Date(worktime.start_from).toLocaleString().slice(0, -3);
        worktime.ended_at = new Date(worktime.ended_at).toLocaleString().slice(0, -3);
        this.worktimes.push(worktime); })
    ).then(() => {
      this.srv.getPersons().then(() =>
        (this.srv.persons).forEach(person => { this.persons.push(person);
          for (let i of this.worktimes) {
            // tslint:disable-next-line:use-isnan max-line-length no-unused-expression
            if (i.person === person.id) { i.cred = person.last_name + ' ' +  person.first_name + ' ' + person.middle_name; }
          }


        })
      )
    }).then(() => {
      this.srv.getOrganizations().then(() =>
        (this.srv.organizations).forEach(organization => { this.organizations.push(organization);
          for (let i of this.workplaces) {
            // tslint:disable-next-line:use-isnan max-line-length
            if (i.id === organization.id) { i.orgname = organization.name; }
          }


        })
      )
    });



  }

  fake() {
    console.log(this.c1);
    console.log(this.c1[0]);
  }




}
