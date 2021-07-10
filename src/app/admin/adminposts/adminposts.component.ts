import { Component, OnInit } from '@angular/core';
import {SrvService} from '../../services/srv.service';
import {Workplace} from '../../models/workplacemodel';
import {Post} from '../../models/postmodel';

@Component({
  selector: 'app-adminposts',
  templateUrl: './adminposts.component.html',
  styleUrls: ['./adminposts.component.css']
})
export class AdminpostsComponent implements OnInit {
  constructor(public srv: SrvService) { }

  organizations = [];
  persons = [];
  workplaces = [];
  filteredworkplaces = [];
  posts = [];

  // @ts-ignore
  openpost = {
    id: -1,
    name: '',
    organization: -1,
    orgname: '',
    work_place: 1,
    workplace: '',
  };

  newpost: Post = {
    name: '',
    organization: 1,
    work_place: 1,
  };

  onChangeEdit(value) {
    this.filteredworkplaces = [];

    for (const i of this.organizations) {
      if (i.name === value) {
        console.log('Совпадение');
        // @ts-ignore
        this.openpost.organization = i.id;
      }
    }

    for (const j of this.workplaces) {
      if (j.organization === this.openpost.organization) {
        this.filteredworkplaces.push(j);
      }

    }

  }

  onOpen() {
    this.newpost.organization = 1;
    this.filteredworkplaces = [];
    this.workplaces.forEach(workplace => {
      if (workplace.organization === 1) {this.filteredworkplaces.push(workplace); }
    });
  }

  onChangeEdit2(value) {
    for (const i of this.workplaces) {
      if (i.name === value) {console.log('Совпадение');
        // @ts-ignore
        this.openpost.work_place = i.id; }
    }
  }

  onChangeAdd(value) {
    this.filteredworkplaces = [];
    for (const i of this.organizations) {
      if (i.name === value) {console.log('Совпадение');
        // @ts-ignore
        this.openpost.organization = i.id; }

    }
    console.log(value)
    console.log(this.openpost.organization);
    console.log('sasd')
    for (const j of this.workplaces) {
      if (j.organization === this.openpost.organization) {
        console.log(j.organization);
        this.filteredworkplaces.push(j);
      }
    }
  }

  onChangeAdd2(value) {
    for (const i of this.workplaces) {
      if (i.name === value) {console.log('Совпадение');
        // @ts-ignore
        this.newpost.work_place = i.id; }
    }
  }

  onAddPost() {
    console.log(this.newpost);
    this.srv.addPost(this.newpost);
    window.location.reload();
  }





  ngOnInit(): void {
    this.takeInfo();

  }

  onOpenPost(post) {
    this.openpost = post;
    console.log(post);
  }
  close(){
    window.location.reload()
  }


  takeInfo() {
    this.workplaces = [];
    this.persons = [];
    this.organizations = [];

    this.srv.getPosts().then(() =>
      (this.srv.posts).forEach(post => {post.workplace = '' ; post.orgname = ''; if (post.organization === 1) {this.posts.push(post);} })
    ).then(() => {
      this.srv.getWorkPlaces().then(() =>
        (this.srv.workplaces).forEach(workplace => { if (workplace.organization === 1) {this.workplaces.push(workplace); }

          if (workplace.organization === 1) {
            this.filteredworkplaces.push(workplace);
          }

          for (const i of this.posts) {
            // tslint:disable-next-line:use-isnan max-line-length
            if (i.work_place === workplace.id) { i.workplace = workplace.name; }
          }


        })
      );
    }).then(() => {
      this.srv.getOrganizations().then(() =>
        (this.srv.organizations).forEach(organization => { if(organization.id === 1) {this.organizations.push(organization); }
          for (const i of this.posts) {
            // tslint:disable-next-line:use-isnan max-line-length
            if (i.organization === organization.id) { i.orgname = organization.name; }
          }

          for (const i of this.workplaces) {
            // tslint:disable-next-line:use-isnan max-line-length
            if (i.organization === organization.id) { i.orgname = organization.name; }
          }


        })
      );
    });



  }

  editPost() {
    const obj: Workplace = {
      id: this.openpost.id,
      name: this.openpost.name,
      organization: this.openpost.organization
    };
    console.log(obj);
    this.srv.editPost(obj);
    window.location.reload();
  }

  deletePost(post) {
    this.srv.delPost(post);
    window.location.reload();
  }




}
