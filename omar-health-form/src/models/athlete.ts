export class Athlete {
  private _healthProgram = null;
  public id?: number;
  public address?: string;
  public cellNumber?: string;
  public officeNumber?: string;
  public athleteEmail?: string;

  constructor(
    public firstName: string,
    public lastName: string,
    public athleteAge: number,
    public gender: string
    ){}

  set healthProgram(value){
    this._healthProgram = value;
  }

  get healthProgram(): any {
    return this._healthProgram;
  }
}
