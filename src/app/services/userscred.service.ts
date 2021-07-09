import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserscredService {

  constructor() { }

  supervisor: object = {
    email: 'supervisor@admin.com',
    password: 'admin',
  };

  admin: object = {
    email: 'admin@admin.com',
    password: 'admin',
  };

  moder: object = {
    email: 'admin@admin.com',
    password: 'admin'
  };

  user: object = {
    email: 'user@admin.com',
    password: 'admin'
  };

}
