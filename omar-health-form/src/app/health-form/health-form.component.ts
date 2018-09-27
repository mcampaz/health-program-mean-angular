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

  constructor(private router: Router, private _athleteService: AthleteService) {

  }

  createAthlete(athleteForm: NgForm){
    debugger;
    this._athleteService.newAthlete(athleteForm.value);
    this.router.navigate(['athlete-result']);
  }

  mapFormValues(form: NgForm){
    this.athlete = new Athlete(
      form.controls['firstName'].value,
      form.controls['lastName'].value,
      form.controls['email'].value,
      form.controls['age'].value,
      form.controls['gender'].value);
    this.athlete.officeNumber = form.controls['officeNumber'].value;
    this.athlete.age = form.controls['address'].value;
    this.athlete.gender = form.controls['cellNumber'].value;
    this._athleteService.newAthlete(this.athlete)
      .subscribe(athlete => this.athlete.push(athlete));
    this.router.navigate(['athlete-result']);
  }

  ngOnInit() {
  }

}
