import { Component, OnInit, TemplateRef } from '@angular/core';
import {SrvService} from '../../services/srv.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {Organization} from '../../models/organizationmodel';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  constructor(private srv: SrvService, private modalService: BsModalService) { }
  modalRef: BsModalRef;

  organizations = [];
  persons = [];

  c1 = [];
  c2 = [];

  neworganization: Organization = {
    name: '',
    phone: '',
    owner: 1
  };

  openorganization: object = {
    name: '',
    phone: '',
    owner: -1,
    workers: -1,
    id: -1,
  };

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  ngOnInit(): void {
  this.getPersons();
  this.getOrganizations();
  this.takeInfo();

  }


  takeInfo() {
    this.c1 = [];
    this.c2 = [];

    this.srv.getOrganizations().then(() =>
      (this.srv.organizations).forEach(organization => {organization.workers = 0 ; this.c1.push(organization); })
    ).then(() => {
      this.srv.getPersons().then(() =>
        (this.srv.persons).forEach(person => { this.c2.push(person);
                                               console.log(person);
                                               for (const i of this.c1) {
                                                 // tslint:disable-next-line:use-isnan max-line-length
                                                 if (i.id === person.organization) { if (i.workers === undefined) { i.workers = 1; } else { i.workers++; }  } else { }
                                               }


        })
      );
    });

  }

  fake() {
    console.log(this.c1);
    console.log(this.c1[0]);
  }

  getPersons() {
    this.persons = [];
    this.srv.getPersons().then(() =>
      (this.srv.persons).forEach(person => this.persons.push(person))
    );
  }

  getOrganizations() {
    this.organizations = [];
    this.srv.getOrganizations().then(() =>
      (this.srv.organizations).forEach(organization => this.organizations.push(organization))
    );
  }

  addOrganization() {
    this.srv.addOrganization(this.neworganization).then(r => console.log(r));
    window.location.reload();
    }

    editOrganization() {
    let obj: Organization = {
      // @ts-ignore
      name: this.openorganization.name,
      // @ts-ignore
      phone: this.openorganization.phone,
      // @ts-ignore
      owner: this.openorganization.owner,
      // @ts-ignore
      id: this.openorganization.id
    };
    this.srv.editOrganization(obj);

    window.location.reload();
    }

    delOrganizaton() {
      // @ts-ignore
      this.srv.delOrganization(this.openorganization.id);
      window.location.reload();
    }

  openOrganization(id) {
    console.log(id);
    for (let i of this.organizations) {
      if (id === i.id) {console.log('Совпадение');
                        this.openorganization = {
          name: i.name,
          phone: i.phone,
          owner: i.owner,
          workers: i.workers,
          id: i.id,
        };
      }
    }
  }
}
