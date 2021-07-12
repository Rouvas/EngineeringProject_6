import { Component, OnInit } from '@angular/core';
import {SrvService} from '../../services/srv.service';
import {Person} from '../../models/personmodel';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  constructor(public srv: SrvService) { }

  componentFilter: any = { first_name: '', orgname: '', postname: '', phone: '' };

  organizations = [];
  persons = [];
  workplaces = [];
  posts = [];

  // tslint:disable-next-line:variable-name
  public birth_date = new Date();

  addperson = {
    id: -1,
    first_name: '',
    last_name: '',
    middle_name: '',
    phone: '',
    email: '',
    birth_date: '',
    status: 'Работает',
    comment: '',
    organization: 1,
    work_place: 1,
    post: 1,
    orgname: ''
  };

  filteredworkplaces = [];
  filteredposts = [];

  openedPerson = {
    birth_date: '',
    comment: '',
    email: '',
    first_name: '',
    id: -1,
    last_name: '',
    middle_name: '',
    organization: -1,
    orgname: '',
    phone: '',
    post: -1,
    postname: '',
    status: '',
    work_place: -1,
    work_place_name: '',
  };


  sorting = false;

  sorting2 = false;

  sorting3 = false;

  sorting4 = false;

  useSortingName(){
    if (this.sorting === false){
      this.sorting = true;
      this.persons.sort((prev, next ) => {
        if (prev.first_name < next.first_name) return -1;
        else if (prev.first_name > next.first_name) return 1;
        else return 0;
      });

    }
    else if (this.sorting == true){
      this.sorting = false;
      this.persons.sort((prev,next) =>{
        if (prev.first_name > next.first_name) return -1;
        else if (prev.first_name < next.first_name) return 1;
        else return 0;

      });

    }
  }

  useSortingPost() {
    if (this.sorting2 === false){
      this.sorting2 = true;
      this.persons.sort((prev, next ) => {
        if (prev.postname < next.postname) return -1;
        else if (prev.postname > next.postname) return 1;
        else return 0;
      });

    }
    else if (this.sorting === true){
      this.sorting2 = false;
      this.persons.sort((prev,next) =>{
        if (prev.postname > next.postname) return -1;
        else if (prev.postname < next.postname) return 1;
        else return 0;

      });

    }
  }

  useSortingOrganization(){
    if (this.sorting3 === false){
      this.sorting3 = true;
      this.persons.sort((prev, next ) => {
        if (prev.orgname < next.orgname) return -1;
        else if (prev.orgname > next.orgname) return 1;
        else return 0;
      });

    }
    else if (this.sorting == true){
      this.sorting = false;
      this.persons.sort((prev,next) =>{
        if (prev.orgname > next.orgname) return -1;
        else if (prev.orgname < next.orgname) return 1;
        else return 0;

      });

    }
  }

  useSortingStatus(){
    if (this.sorting3 === false){
      this.sorting3 = true;
      this.persons.sort((prev, next ) => {
        if (prev.status < next.status) return -1;
        else if (prev.status > next.status) return 1;
        else return 0;
      });

    }
    else if (this.sorting == true){
      this.sorting = false;
      this.persons.sort((prev,next) =>{
        if (prev.status > next.status) return -1;
        else if (prev.status < next.status) return 1;
        else return 0;

      });

    }
  }

  ngOnInit(): void {
    this.takeInfo();

  }

  onOpenAdd() {
    this.filteredworkplaces = [];
    this.filteredposts = [];
    for (const i of this.workplaces) {
      // tslint:disable-next-line:use-isnan max-line-length
      if (i.organization === 1) { this.filteredworkplaces.push(i);
      }
    }
    for (const j of this.posts) {
      // tslint:disable-next-line:use-isnan max-line-length
      if (j.organization === 1) { this.filteredposts.push(j);
      }
    }

  }
  close(){
    window.location.reload();
  }

  editPerson() {
    const month = this.birth_date.getMonth() + 1;
    const date = this.birth_date.getFullYear() + '-' + month + '-' +  this.birth_date.getDate();

    const obj: Person = {
      // tslint:disable-next-line:new-parens
      id: this.openedPerson.id,
      birth_date: date,
      email: this.openedPerson.email,
      first_name: this.openedPerson.first_name,
      last_name: this.openedPerson.last_name,
      organization: this.openedPerson.organization,
      phone: this.openedPerson.phone,
      post: this.openedPerson.post,
      status: this.openedPerson.status,
      work_place: this.openedPerson.work_place
    };
    console.log(obj);
    this.srv.editPersonbyid(obj);
    window.location.reload();
  }

  deletePerson(person) {
    this.srv.delPersonbyid(person);
    window.location.reload();
  }

  openPerson(person) {
    this.filteredworkplaces = [];
    this.filteredposts = [];
    this.openedPerson = person;
    this.birth_date = new Date(person.birth_date);

    for (const i of this.workplaces) {
      for (const j of this.organizations) {
        if (i.organization === j.id && j.id === this.openedPerson.organization) {this.filteredworkplaces.push(i);}
      }
    }

    for (const i of this.posts) {
      for (const j of this.organizations) {
        if (i.organization === j.id && j.id === this.openedPerson.organization) {this.filteredposts.push(i);}
      }
    }
  }

  onChangeAdd(value) {
    this.filteredworkplaces = [];
    this.filteredposts = [];
    for (const i of this.organizations) {
      if (i.name === value)
        {
        // @ts-ignore
         this.addperson.organization = i.id;
        }

    }
    for (const j of this.workplaces) {
      if (j.organization === this.addperson.organization) {
        this.filteredworkplaces.push(j);
      }
    }
    for (const g of this.posts) {
      // tslint:disable-next-line:use-isnan max-line-length
      { if(g.work_place === this.addperson.work_place){this.filteredposts.push(g); }  }
    }
    this.addperson.work_place = this.filteredworkplaces[1].id;
  }

  onChangeAdd2(value) {
    this.filteredposts = [];
    console.log(this.posts);
    for (const i of this.workplaces) {
      if (i.name === value) {
        // @ts-ignore
        this.addperson.work_place = i.id; }
    }

    for (const j of this.posts) {
      if (j.work_place === this.addperson.work_place) {
        console.log(j.name);
        this.filteredposts.push(j);
      }
    }
  }

  onChangeAdd3(value) {
    for (const i of this.posts) {
      if (i.name === value) {
        // @ts-ignore
        this.addperson.post = i.id; }
    }
  }

  onChangeEdit(value) {
    this.filteredworkplaces = [];
    this.filteredposts = [];
    for (const i of this.organizations) {
      if (i.name === value)
      {
        // @ts-ignore
        this.openedPerson.organization = i.id;
      }

    }
    for (const j of this.workplaces) {
      if (j.organization === this.openedPerson.organization) {
        this.filteredworkplaces.push(j);
      }
    }
    for (const g of this.posts) {
      // tslint:disable-next-line:use-isnan max-line-length
      { if(g.work_place === this.openedPerson.work_place){this.filteredposts.push(g); }  }
    }
    this.openedPerson.work_place = this.filteredworkplaces[1].id;
  }

  onChangeEdit2(value) {
    this.filteredposts = [];
    console.log(this.posts);
    for (const i of this.workplaces) {
      if (i.name === value) {
        // @ts-ignore
        this.openedPerson.work_place = i.id; }
    }

    for (const j of this.posts) {
      if (j.work_place === this.openedPerson.work_place) {
        console.log(j.name);
        this.filteredposts.push(j);
      }
    }
  }

  onChangeEdit3(value) {
    for (const i of this.posts) {
      if (i.name === value) {
        // @ts-ignore
        this.openedPerson.post = i.id; }
    }
  }

  onAddPerson() {
    // YYYY-MM-DD
    const month = this.birth_date.getMonth() + 1;
    const date = this.birth_date.getFullYear() + '-' + month + '-' +  this.birth_date.getDate();

    const obj: Person = {
      // tslint:disable-next-line:new-parens
      birth_date: date,
      email: this.addperson.email,
      first_name: this.addperson.first_name,
      last_name: this.addperson.last_name,
      organization: this.addperson.organization,
      phone: this.addperson.phone,
      post: this.addperson.post,
      status: this.addperson.status,
      work_place: this.addperson.work_place
    };
    console.log(obj);
    this.srv.addPerson(obj);
    window.location.reload();
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
    }).then(() => {
      this.srv.getWorkPlaces().then(() =>
        (this.srv.workplaces).forEach(workplace => { this.workplaces.push(workplace);
        })
      )
    });



  }





}
