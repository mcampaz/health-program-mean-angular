import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {Form, FormGroup, NgForm} from '@angular/forms'
import {forEach} from "@angular/router/src/utils/collection";
import {Athlete, IAthlete} from "../../models/athlete";
import {AthleteService} from "../../services/athlete.service";

@Component({
  selector: 'app-health-form',
  templateUrl: './health-form.component.html',
  styleUrls: ['./health-form.component.css']
})

export class HealthFormComponent implements OnInit {
  public  athlete;
  genders = ['female', 'male', 'other'];
  public athletes = [];
  public errorMsg;

  constructor(private router: Router,
              private _athleteService: AthleteService) {
  }

  createAthlete(athleteForm: NgForm){
    debugger;
    this.athlete = new Athlete(
      athleteForm.value.athlete.firstName,
      athleteForm.value.athlete.lastName,
      athleteForm.value.athlete.email,
      athleteForm.value.athlete.age,
      athleteForm.value.athlete.gender);
    this.athlete.athleteCount = this.athletes.length + 1;
    this.athlete.officeNumber =  athleteForm.value.athlete.officeNumber;
    this.athlete.cellNumber =  athleteForm.value.athlete.cellNumber;
    this.athlete.address =  athleteForm.value.athlete.address;
    this.athlete.healthProgram = [];

    this._athleteService.newAthlete(this.athlete)
      .subscribe(athlete => this.athlete = athlete);
    this.router.navigate(['athlete-result']);
  }

  ngOnInit() {
    this._athleteService.getAthletes()
      .subscribe(data => this.athletes = data,
        error => this.errorMsg = error);
  }

}
