export class Person {
  public  id?: number;
  // tslint:disable-next-line:variable-name
  public  first_name: string;
  // tslint:disable-next-line:variable-name
  public  last_name: string;
  // tslint:disable-next-line:variable-name
  public  middle_name?: string;
  public  phone: string;
  public  email: string;
  // tslint:disable-next-line:variable-name
  public  birth_date: string;
  public  status: string;
  public  comment?: string;
  public  organization: number;
  // tslint:disable-next-line:variable-name
  public  work_place: number;
  public  post: number;

  // @ts-ignore
  // tslint:disable-next-line:variable-name
  constructor(first_name: string, last_name: string, middle_name?: string, phone: string,
  // tslint:disable-next-line:variable-name
              email: string, birth_date: string, status: string, comment?: string,
  // tslint:disable-next-line:variable-name
              organization: number, work_place: number, post: number,  id?: number) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.middle_name = middle_name;
    this.phone = phone;
    this.email = email;
    this.birth_date = birth_date;
    this.status = status;
    this.comment = comment;
    this.organization = organization;
    this.work_place = work_place;
    this.post = post;

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
