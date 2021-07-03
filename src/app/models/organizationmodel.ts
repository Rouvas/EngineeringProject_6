export class Organization {
  public id?: number;
  public name: string;
  public phone: string;
  public owner: number;

  constructor(name: string, phone: string,
              owner: number, id?: number) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.owner = owner;
  }
}


// id	integer
// title: ID
// readOnly: true
// name*	string
// title: Название
// maxLength: 100
// minLength: 1
// phone*	string
// title: Телефон
// maxLength: 20
// minLength: 1
// owner*	integer
// title: Владелец
