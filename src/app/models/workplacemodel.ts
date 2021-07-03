export class Workplace {
  public id: number;
  public name: string;
  public organization: number;

  constructor(name: string,
              organization: number, id?: number) {
    this.id = id;
    this.name = name;
    this.organization = organization;
  }
}
