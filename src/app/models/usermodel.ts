export class User {
  public id: number;
  public email: string;
  public name: string;
  public token: string;

  constructor(name: string, email: string,
              token: string, id?: number) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.token = token;
  }
}
