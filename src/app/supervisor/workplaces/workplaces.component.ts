import { Component, OnInit } from '@angular/core';
import {SrvService} from '../../services/srv.service';
import {Workplace} from '../../models/workplacemodel';

@Component({
  selector: 'app-workplaces',
  templateUrl: './workplaces.component.html',
  styleUrls: ['./workplaces.component.css']
})
export class WorkplacesComponent implements OnInit {

  constructor(public srv: SrvService) { }

  organizations = [];
  persons = [];
  workplaces = [];


  newworkplace: Workplace = {
    organization: 1,
    name: ''
  };



  ngOnInit(): void {
    this.takeInfo();

  }


  takeInfo() {
    this.workplaces = [];
    this.persons = [];
    this.organizations = [];

    this.srv.getWorkPlaces().then(() =>
      (this.srv.workplaces).forEach(workplace => {workplace.workers = 0 ; workplace.orgname = ''; this.workplaces.push(workplace);})
    ).then(() => {
      this.srv.getPersons().then(() =>
        (this.srv.persons).forEach(person => { this.persons.push(person);
          for (let i of this.workplaces) {
            // tslint:disable-next-line:use-isnan max-line-length
            if (i.id === person.organization) { if (i.workers === undefined) { i.workers = 1; } else { i.workers++; }  } else { }
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

  addWorkPlace() {
   this.srv.addWorkPlace(this.newworkplace);
   window.location.reload();
  }

  onChange(value) {
    for (const i of this.organizations) {
      if (i.name === value) {console.log('Совпадение'); this.newworkplace.organization = i.id}
    }
    console.log(this.newworkplace);
  }




}
