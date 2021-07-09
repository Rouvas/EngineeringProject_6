import { Component, OnInit } from '@angular/core';
import {SrvService} from '../../services/srv.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
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

    this.srv.getPosts().then(() =>
      (this.srv.posts).forEach(post => {post.workplace = '' ; post.orgname = ''; this.posts.push(post); })
    ).then(() => {
      this.srv.getWorkPlaces().then(() =>
        (this.srv.workplaces).forEach(workplace => { this.workplaces.push(workplace);
          for (let i of this.posts) {
            // tslint:disable-next-line:use-isnan max-line-length
            if (i.work_place === workplace.id) { i.workplace = workplace.name; }
          }


        })
      )
    }).then(() => {
      this.srv.getOrganizations().then(() =>
        (this.srv.organizations).forEach(organization => { this.organizations.push(organization);
          for (let i of this.posts) {
            // tslint:disable-next-line:use-isnan max-line-length
            if (i.organization === organization.id) { i.orgname = organization.name; }
          }


        })
      )
    });



  }




}
