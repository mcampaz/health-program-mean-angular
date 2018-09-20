export class Athlete {
  private healthProgram = null;

  constructor(
    public firstName: string,
    public lastName: string,
    public address: string,
    public cellNumber: string,
    public officeNumber: string,
    public email: string,
    public age: number,
    public sex: string
    ){
  }
  setHealthProgram(value){
    this.healthProgram = value;
  }
}
