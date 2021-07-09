import { Component, OnInit } from '@angular/core';
import {SrvService} from '../../services/srv.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  constructor(public srv: SrvService) { }

  organizations = [];
  persons = [];
  workplaces = [];
  posts = [];

  ngOnInit(): void {
    this.takeInfo();

  }


  takeInfo() {
    this.workplaces = [];
    this.persons = [];
    this.organizations = [];
    this.posts = [];

    this.srv.getPersons().then(() =>
      (this.srv.persons).forEach(person => {person.orgname = '' ; person.postname = ''; this.persons.push(person);})
    ).then(() => {
      this.srv.getOrganizations().then(() =>
        (this.srv.organizations).forEach(organization => { this.organizations.push(organization);
          for (let i of this.persons) {
            // tslint:disable-next-line:use-isnan max-line-length
            if (i.organization === organization.id) { i.orgname = organization.name; }
          }
        })
      )
    }).then(() => {
      this.srv.getPosts().then(() =>
        (this.srv.posts).forEach(post => { this.posts.push(post);
          for (let i of this.persons) {
            // tslint:disable-next-line:use-isnan max-line-length
            if (i.post === post.id) { i.postname = post.name; }
          }


        })
      )
    });



  }





}
