import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserscredService {

  constructor() { }

  credentials = [
    {
      email: 'supervisor@admin.com',
      password: 'admin',
      role: 2,
    },
    {
      email: 'admin@admin.com',
      password: 'admin',
      organization: 1,
      role: 1,
    },
    {
      email: 'moder@admin.com',
      password: 'admin',
      organization: 1,
      role: 0,
    }
  ];

}
