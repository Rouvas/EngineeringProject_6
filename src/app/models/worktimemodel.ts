export class Worktime {
  public id?: number;
  // tslint:disable-next-line:variable-name
  public start_from: string;
  // tslint:disable-next-line:variable-name
  public ended_at: string;
  public organization: number;
  public person: number;

  // tslint:disable-next-line:variable-name
  constructor(start_from: string, ended_at: string, organization: number,
              person: number, id?: number) {
    this.id = id;
    this.start_from = start_from;
    this.ended_at = ended_at;
    this.organization = organization;
    this.person = person;
  }
}
