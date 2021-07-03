export class Post {
  public id?: number;
  public name: string;
  public organization: number;
  // tslint:disable-next-line:variable-name
  public work_place?: number;


  constructor(name: string, organization: number,
  // tslint:disable-next-line:variable-name @ts-ignore
              id?: number, work_place?: number ) {
    this.id = id;
    this.name = name;
    this.organization = organization;
    this.work_place = work_place;
  }
}
