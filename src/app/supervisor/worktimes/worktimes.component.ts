import { Component, OnInit } from '@angular/core';
import {SrvService} from '../../services/srv.service';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {Worktime} from '../../models/worktimemodel';

@Component({
  selector: 'app-worktimes',
  templateUrl: './worktimes.component.html',
  styleUrls: ['./worktimes.component.css']
})
export class WorktimesComponent implements OnInit {
  constructor(public srv: SrvService) { }

  // tslint:disable-next-line:variable-name
  public start_from = new Date();
  // tslint:disable-next-line:variable-name
  public ended_at = new Date();

  selectedPerson;
  selectedOrg;

  organizations = [];
  persons = [];
  workplaces = [];
  worktimes = [];

  opentime = {
    start_from: '',
    ended_at: '',
    cred: '',
    orgname: '',
  };




  c1 = [];



  ngOnInit(): void {
    this.takeInfo();

  }

  onCreateTime() {
    const obj: Worktime = {
      ended_at: this.ended_at.toJSON(),
      organization: this.selectedOrg,
      person: this.selectedPerson,
      start_from: this.start_from.toJSON()};

    this.srv.addWorkTime(obj);
    window.location.reload();
  }

  openTime(worktime) {
    this.opentime = worktime;
    console.log(worktime);
    for (const i of this.organizations) {
      if (i.id === worktime.organization) {this.opentime.orgname = i.name; }
    }
  }

  deleteTime(opentime) {
    this.srv.delWorkTime(opentime).then(() => {
      this.worktimes = this.worktimes.filter(worktime => worktime.id !== opentime.id);
    });
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
                                               for (const i of this.worktimes) {
            // tslint:disable-next-line:use-isnan max-line-length no-unused-expression
            if (i.person === person.id) { i.cred = person.last_name + ' ' +  person.first_name + ' ' + person.middle_name; }
          }


        })
      );
    }).then(() => {
      this.srv.getOrganizations().then(() =>
        (this.srv.organizations).forEach(organization => { this.organizations.push(organization);
                                                           for (const i of this.workplaces) {
            // tslint:disable-next-line:use-isnan max-line-length
            if (i.id === organization.id) { i.orgname = organization.name; }
          }

                                                           for (const i of this.persons) {
            // tslint:disable-next-line:use-isnan max-line-length
            if (i.organization === organization.id) { i.orgname = organization.name; }
          }


        })
      );
    });



  }

  fake() {
    console.log(this.c1);
    console.log(this.c1[0]);
  }




}
