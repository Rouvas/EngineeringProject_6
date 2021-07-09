import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

// Import models
import {Organization} from '../models/organizationmodel';
import {Person} from '../models/personmodel';
import {Post} from '../models/postmodel';
import {User} from '../models/usermodel';
import {Workplace} from '../models/workplacemodel';
import {Worktime} from '../models/worktimemodel';


@Injectable({
  providedIn: 'root'
})
export class SrvService {

  constructor(public http: HttpClient) { }

  // Link to RestAPI
  link = 'http://rouvas.ru/api/v1';



// Work with Organization

organizations = [];
persons = [];
worktimes = [];
workplaces = [];
organization = {};
posts = [];

  // Persons

  // Persons of workplaces

  async getPersons() {

    const data = await this.http
      .get(`${this.link}/persons`, {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      })
      .toPromise().catch(error => { this.onError(error); });

    // @ts-ignore
    this.persons = data.results;

  }

  // Person by id of workplaces

  async getPersonsbyid(id: number) {

    const data = await this.http
      .get(`${this.link}/persons/${id}`, {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      })
      .toPromise().catch(error => { this.onError(error); });

    return(data);

  }

  // Person by id of workplaces EDIT

  async editPersonbyid(person: Person) {

    const data = await this.http
      .put(`${this.link}/persons/${person.id}`, person , {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      }, )
      .toPromise().catch(error => { this.onError(error); });

  }

  // Add new person to workplace

  async addPersonbyid(person: Person) {

    const data = await this.http
      .post(`${this.link}/persons/`, person , {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      })
      .toPromise().catch(error => { this.onError(error); });


  }

  async delPersonbyid(person: Person) {

    const data = await this.http
      .delete(`${this.link}/persons/${person.id}` , {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      })
      .toPromise().catch(error => { this.onError(error); });


  }
// Get organizations

async getOrganizations() {

    const data = await this.http
      .get(`${this.link}/organizations`, {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab',
        }
      })
      .toPromise().catch(error => { this.onError(error); });


    // @ts-ignore
    this.organizations = data.results;



    await this.getPersons();

  }

// getOrganization by id

async getOrganization(id: number) {

    const data = await this.http
      .get(`${this.link}/organizations/${id}`, {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      })
      .toPromise().catch(error => { this.onError(error); });

    console.log(data);
    // @ts-ignore
    this.organization = data;
    return data;
  }

// editOrganization

async editOrganization(organization: Organization) {

    const id = organization.id;
    delete organization.id;
    console.log(organization);

    await this.http.put(`${this.link}/organizations/${id}/`, organization , {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      }, )
      .toPromise().catch(error => { this.onError(error); });

  }

// Add organization by id

  async addOrganization(organization: Organization) {

    const data = await this.http
      .post(`${this.link}/organizations/`, organization , {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      })
      .toPromise().catch(error => { this.onError(error); });

  }

  async delOrganization(id) {

    await this.http
      .delete(`${this.link}/organizations/${id}/` , {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      })
      .toPromise().catch(error => { this.onError(error); });

  }

// Должность

// Get posts

  async getPosts() {

    const data = await this.http
      .get(`${this.link}/posts`, {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      })
      .toPromise().catch(error => { this.onError(error); });

    // @ts-ignore
    this.posts = data.results;

  }

// getPost by id

  async getPost(id: number) {

    const data = await this.http
      .get(`${this.link}/posts/${id}`, {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      })
      .toPromise().catch(error => { this.onError(error); });


  }

// editPost

  async editPost(post: Post) {

    const data = await this.http
      .put(`${this.link}/posts/${post.id}/`, post , {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      }, )
      .toPromise().catch(error => { this.onError(error); });


  }

// Add post by id

  async addPost(post: Post) {

    await this.http
      .post(`${this.link}/posts/`, post , {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      })
      .toPromise().catch(error => { this.onError(error); });


  }

// Del post by id

  async delPost(post: Post) {

    const data = await this.http
      .delete(`${this.link}/posts/${post.id}/` , {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      })
      .toPromise().catch(error => { this.onError(error); });


  }

// Рабочие места

// Get workplaces

  async getWorkPlaces() {

    const data = await this.http
      .get(`${this.link}/work_places`, {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      })
      .toPromise().catch(error => { this.onError(error); });

    // @ts-ignore
    this.workplaces = data.results;

  }

// getWorkPlace by id

  async getWorkPlace(id: number) {

    const data = await this.http
      .get(`${this.link}/work_places/${id}`, {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      })
      .toPromise().catch(error => { this.onError(error); });


  }

// editWorkPlace

  async editWorkPlace(workplace: Workplace) {

     await this.http
      .put(`${this.link}/work_places/${workplace.id}/`, workplace , {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      }, )
      .toPromise().catch(error => { this.onError(error); });


  }

// Add workplace

  async addWorkPlace(workplace: Workplace) {

    const data = await this.http
      .post(`${this.link}/work_places/`, workplace , {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      })
      .toPromise().catch(error => { this.onError(error); });


  }

// Del workplace by id

  async delWorkPlace(workplace: Workplace) {

    const data = await this.http
      .delete(`${this.link}/work_places/${workplace.id}/` , {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      })
      .toPromise().catch(error => { this.onError(error); });


  }



// Рабочее время

// Get worktimes

  async getWorkTimes() {

    const data = await this.http
      .get(`${this.link}/work_times`, {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      })
      .toPromise().catch(error => { this.onError(error); });

    // @ts-ignore
    this.worktimes = data.results;

  }

// getWorkTime by id

  async getWorkTime(id: number) {

    const data = await this.http
      .get(`${this.link}/work_times/${id}`, {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      })
      .toPromise().catch(error => { this.onError(error); });


  }

// editWorkTime

  async editWorkTime(worktime: Worktime) {

    const data = await this.http
      .put(`${this.link}/work_places/${worktime.id}`, worktime , {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      }, )
      .toPromise().catch(error => { this.onError(error); });


  }

// Add worktime

  async addWorkTime(worktime: Worktime) {

    const data = await this.http
      .post(`${this.link}/work_times/`, worktime , {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      })
      .toPromise().catch(error => { this.onError(error); });

  }

// Del worktime by id

  async delWorkTime(worktime: Worktime) {

    const data = await this.http
      .delete(`${this.link}/work_times/${worktime.id}` , {
        headers: {
          Authorization: 'TOKEN 2cd1dc478c84a6abc1885804ba827d5ea9880aab'
        }
      })
      .toPromise().catch(error => { this.onError(error); });


  }


// Error handler (обработчик ошибок)

  onError(error) {
    // if (error.status === 400){
    //   console.log('Нет доступа');
    // }
    console.log(error.status);
  }
}
