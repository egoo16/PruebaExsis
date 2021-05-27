export class UserModel {
  constructor(
    public name: string,
    // tslint:disable-next-line: variable-name
    public family_name: string,
    public email: string,
    public comment: string,
    public phone?: number,
    public program?: number
  ) {}
}
