import {HealthProgram} from "./health-program";

export interface IAthlete {

  firstName: string,
  lastName: string,

  id?: number,
  address?: string,
  cellNumber?: string,
  officeNumber?: string,
  email: string,
  age: number,
  gender: string,
  healthProgram: HealthProgram

}

export class Athlete {

  public id?: number;
  public address?: string;
  public cellNumber?: string;
  public officeNumber?: string;
  public healthProgram?: HealthProgram

  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public age: number,
    public gender: string
  ){}

}
