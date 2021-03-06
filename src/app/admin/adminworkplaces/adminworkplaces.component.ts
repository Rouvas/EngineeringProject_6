import { Component, OnInit } from '@angular/core';
import {SrvService} from '../../services/srv.service';
import {Workplace} from '../../models/workplacemodel';

@Component({
  selector: 'app-adminworkplaces',
  templateUrl: './adminworkplaces.component.html',
  styleUrls: ['./adminworkplaces.component.css']
})
export class AdminworkplacesComponent implements OnInit {

  constructor(public srv: SrvService) { }

  organizations = [];
  persons = [];
  workplaces = [];
  componentFilter: any = { name: '', orgname: '' };

  // @ts-ignore
  openworkplace = {
    id: -1,
    organization: -1,
    name: '',
    orgname: ''
  };

  newworkplace: Workplace = {
    organization: 1,
    name: ''
  };

  sorting = false;

  sorting2 = false;

  useSorting(){
    console.log(this.sorting)
    if (this.sorting == false){
      this.sorting = true;
      this.workplaces.sort((prev, next ) => {
        if (prev.name < next.name) return -1;
        else if (prev.name > next.name) return 1;
        else return 0;
      });

    }
    else if (this.sorting == true){
      this.sorting = false;
      this.workplaces.sort((prev,next) =>{
        if (prev.name > next.name) return -1;
        else if (prev.name < next.name) return 1;
        else return 0;

      });

    }
  }

  useSorting2(){
    console.log(this.sorting)
    if (this.sorting == false){
      this.sorting = true;
      this.workplaces.sort((prev, next ) => {
        if (prev.orgname < next.orgname) return -1;
        else if (prev.orgname > next.orgname) return 1;
        else return 0;
      });

    }
    else if (this.sorting == true){
      this.sorting = false;
      this.workplaces.sort((prev,next) =>{
        if (prev.orgname > next.orgname) return -1;
        else if (prev.orgname < next.orgname) return 1;
        else return 0;

      });

    }
  }



  ngOnInit(): void {
    this.takeInfo();

  }


  takeInfo() {
    this.workplaces = [];
    this.persons = [];
    this.organizations = [];

    this.srv.getWorkPlaces().then(() =>
      (this.srv.workplaces).forEach(workplace => {workplace.workers = 0 ; workplace.orgname = ''; if (workplace.organization === 1) {this.workplaces.push(workplace); } })
    ).then(() => {
      this.srv.getPersons().then(() =>
        (this.srv.persons).forEach(person => { if (person.organization === 1) { this.persons.push(person);}
          for (let i of this.workplaces) {
            // tslint:disable-next-line:use-isnan max-line-length
            if (i.id === person.organization) { if (i.workers === undefined) { i.workers = 1; } else { i.workers++; }  } else { }
          }


        })
      )
    }).then(() => {
      this.srv.getOrganizations().then(() =>
        (this.srv.organizations).forEach(organization => { if (organization.id === 1) {this.organizations.push(organization);}
          for (const i of this.workplaces) {
            // tslint:disable-next-line:use-isnan max-line-length
            if (i.organization === organization.id) { i.orgname = organization.name; }
          }


        })
      )
    });



  }

  addWorkPlace() {
    this.srv.addWorkPlace(this.newworkplace);
    window.location.reload();
  }

  deleteWorkplace(workplace) {
    this.srv.delWorkPlace(workplace);
    window.location.reload();
  }

  openWorkPlace(workplace) {
    this.openworkplace = workplace;
    console.log(this.openworkplace);
  }

  editWorkPlace() {
    const obj: Workplace = {
      name: this.openworkplace.name,
      organization: this.openworkplace.organization,
      id: this.openworkplace.id
    };
    this.srv.editWorkPlace(obj);
    window.location.reload();
  }

  onChange(value) {
    for (const i of this.organizations) {
      if (i.name === value) {console.log('????????????????????'); this.newworkplace.organization = i.id; }
    }
  }

  onChangeEdit(value) {
    for (const i of this.organizations) {
      if (i.name === value) {console.log('????????????????????'); this.openworkplace.organization = i.id; }
    }
  }




}
