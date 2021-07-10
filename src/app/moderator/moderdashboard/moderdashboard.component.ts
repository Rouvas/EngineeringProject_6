import {Component, OnInit, TemplateRef} from '@angular/core';
import {SrvService} from '../../services/srv.service';
import {BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-moderdashboard',
  templateUrl: './moderdashboard.component.html',
  styleUrls: ['./moderdashboard.component.css']
})
export class ModerdashboardComponent implements OnInit {

  constructor(private srv: SrvService, private modalService: BsModalService) {
  }

  organizations = [];
  persons = [];

  c1 = [];
  c2 = [];
  c3 = [];

  ngOnInit(): void {
    this.takeInfo();
  }

  takeInfo() {
    this.c1 = [];
    this.c2 = [];
    this.c3 = [];

    this.srv.getOrganizations().then(() =>
      (this.srv.organizations).forEach(organization => {organization.workers = 0 ; if (organization.id === 1) {this.c1.push(organization);} })
    ).then(() => {
      this.srv.getPersons().then(() =>
        (this.srv.persons).forEach(person => { if (person.organization === 1) {this.c2.push(person); }
          for (let i of this.c1) {
            // tslint:disable-next-line:use-isnan max-line-length
            if (i.id === person.organization) { if (i.workers === undefined) { i.workers = 1; } else { i.workers++; }  } else { }
          }
        })
      ).then(() => {
        this.srv.getWorkTimes().then(() =>
          (this.srv.worktimes).forEach(worktimes => { if (worktimes.organization === 1) {this.c3.push(worktimes);}  }  ));
      });
    });

  }

}
