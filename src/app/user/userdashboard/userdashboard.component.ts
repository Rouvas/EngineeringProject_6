import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {SrvService} from '../../services/srv.service';
import {Person} from '../../models/personmodel';
import {resolve} from '@angular/compiler-cli/src/ngtsc/file_system';
import {Worktime} from '../../models/worktimemodel';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  constructor(
    private srv: SrvService,
    private activatedRouter: ActivatedRoute,
  ) {
    this.activatedRouter.params.subscribe(param => {
      this.id = parseInt(param.id, 10);
      if (isNaN(this.id) === true) {window.location.replace('/attack'); }
    });
  }

  // tslint:disable-next-line:variable-name
  public start_from = new Date();
  // tslint:disable-next-line:variable-name
  public ended_at = new Date();

  id: number;

  persons;
  person: Person = {
    birth_date: '', email: '', first_name: '', last_name: '', middle_name: '',
    organization: 0, phone: '', post: 0, status: '', work_place: 0
  };

  personinfo: object = {
    post: '',
    organization: '',
    work_place: ''
  };
  posts;

  organizations = [];
  workplaces = [];
  worktimes = [];
  opentime = {
    start_from: '',
    ended_at: ''
  };

  checkTime() {
    console.log(this.start_from.toJSON());
    console.log(this.ended_at.toJSON());
  }

  async ngOnInit(): Promise<void> {
    console.log(await this.srv.getPersonsbyid(this.id));
    this.takeInfo();
  }

  openTime(id) {
    console.log(id);
    for (let i of this.worktimes) {
      if (id === i.id) {console.log('Совпадение')
      this.opentime.start_from = i.start_from;
        this.opentime.ended_at = i.ended_at;
      }
    }
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON

  addTime() {
    let obj: Worktime = {
      start_from: this.start_from.toJSON(),
      ended_at: this.ended_at.toJSON(),
      person: this.person.id,
      organization: this.person.organization
    }

    this.srv.addWorkTime(obj);
    obj.start_from = new Date(obj.start_from).toLocaleString().slice(0, -3);
    obj.ended_at = new Date(obj.ended_at).toLocaleString().slice(0, -3);
    this.worktimes.push(obj);
  }

  takeInfo() {
    this.persons = [];
    this.posts = [];
    this.organizations = [];
    this.workplaces = [];
    this.worktimes = [];

    this.srv.getPersons().then(() =>
      (this.srv.persons).forEach(person => {this.persons.push(person);
        // tslint:disable-next-line:no-conditional-assignment
        if (person.id === this.id) {this.person = person} })
    ).then(() => {
      this.srv.getPosts().then(() =>
        (this.srv.posts).forEach(post => { this.posts.push(post);
            if (post.id === this.person.post) {this.personinfo['post'] = post.name; }
        })
      );
      }
    ).then(() => {
      this.srv.getOrganizations().then(() =>
        (this.srv.organizations).forEach(organization => { this.organizations.push(organization);
          if (organization.id === this.person.organization) {this.personinfo['organization'] = organization.name; }
        })
      );
    }).then(() => {
      this.srv.getWorkPlaces().then(() =>
        (this.srv.workplaces).forEach(workplace => { this.workplaces.push(workplace);
          if (workplace.id === this.person.work_place) {this.personinfo['work_place'] = workplace.name; }
        })
      );
    }).then(() => {
      {
        this.srv.getWorkTimes().then(() =>
          (this.srv.worktimes).forEach(worktime => {
            if (worktime.person === this.person.id) {
              worktime.start_from = new Date(worktime.start_from).toLocaleString().slice(0, -3);
              worktime.ended_at = new Date(worktime.ended_at).toLocaleString().slice(0, -3);
              this.worktimes.push(worktime);
            }
          })
        );
      }
    });
  }

  // worker/dashboard/:id
}
